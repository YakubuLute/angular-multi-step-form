
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subject, takeUntil } from 'rxjs'
import { Step } from '../../../features/models'
import { SignupDataService } from '../../../features/services/signup/signup.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-step-indicator',
  templateUrl: './step-indicator.component.html',
  imports: [CommonModule],
  styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()

  steps: Step[] = [
    {
      id: 1,
      title: 'STEP 1',
      label: 'YOUR INFO',
      route: 'personal-info',
      completed: false
    },
    {
      id: 2,
      title: 'STEP 2',
      label: 'SELECT PLAN',
      route: 'select-plan',
      completed: false
    },
    {
      id: 3,
      title: 'STEP 3',
      label: 'ADD-ONS',
      route: 'add-ons',
      completed: false
    },
    {
      id: 4,
      title: 'STEP 4',
      label: 'SUMMARY',
      route: 'summary',
      completed: false
    }
  ]

  currentStep = 1

  constructor (
    private signupDataService: SignupDataService,
    private router: Router
  ) {}

  ngOnInit (): void {
    // Subscribe to signup data changes to update step completion status
    this.signupDataService.signupData$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.currentStep = data.currentStep
        this.updateStepCompletion()
      })

    // Set initial current step based on current route
    this.setCurrentStepFromRoute()
  }

  ngOnDestroy (): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  private setCurrentStepFromRoute (): void {
    const currentUrl = this.router.url
    const step = this.steps.find(s => currentUrl.includes(s.route))
    if (step) {
      this.currentStep = step.id
      this.signupDataService.updateCurrentStep(step.id)
    }
  }

  private updateStepCompletion (): void {
    this.steps.forEach(step => {
      step.completed = this.signupDataService.isStepCompleted(step.id)
    })
  }

  onStepClick (step: Step): void {
    // Only allow navigation to completed steps or the next immediate step
    if (step.completed || step.id === this.getNextAvailableStep()) {
      this.router.navigate([`/signup/${step.route}`])
    }
  }

  private getNextAvailableStep (): number {
    for (let i = 1; i <= this.steps.length; i++) {
      if (!this.signupDataService.isStepCompleted(i)) {
        return i
      }
    }
    return this.steps.length // All steps completed
  }

  isStepActive (step: Step): boolean {
    return step.id === this.currentStep
  }

  isStepClickable (step: Step): boolean {
    return step.completed || step.id === this.getNextAvailableStep()
  }

  trackByStepId (index: number, step: Step): number {
    return step.id
  }
}
