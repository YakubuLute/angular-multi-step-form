import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd, RouterOutlet } from '@angular/router'
import { filter } from 'rxjs/operators'
import { SignupDataService } from '../../../services/signup/signup.service'
import { StepIndicatorComponent } from '../../../../shared/components/step-indicator/step-indicator.component'

@Component({
  selector: 'app-signup-wrapper',
  imports: [RouterOutlet, StepIndicatorComponent],
  templateUrl: './signup-wrapper.component.html',
  styleUrls: ['./signup-wrapper.component.scss']
})
export class SignupWrapperComponent implements OnInit {
  constructor (
    private router: Router,
    private signupDataService: SignupDataService
  ) {}

  ngOnInit (): void {
    // Update current step when route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCurrentStepFromRoute(event.url)
      })
  }

  private updateCurrentStepFromRoute (url: string): void {
    let step = 1

    if (url.includes('select-plan')) {
      step = 2
    } else if (url.includes('add-ons')) {
      step = 3
    } else if (url.includes('summary')) {
      step = 4
    }

    this.signupDataService.updateCurrentStep(step)
  }
}
