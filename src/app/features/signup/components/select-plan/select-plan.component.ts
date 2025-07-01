import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SignupDataService } from '../../../services/signup/signup.service'
import { CommonModule } from '@angular/common'
import { planData } from '../../../models/plan-mockdata'
import { Plan } from '../../../models'

@Component({
  selector: 'app-select-plan',
  imports: [CommonModule],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent implements OnInit {
  isLoading: boolean = false
  packages: Plan[] = planData
  selectedPlan: Plan | null = null

  constructor (
    private signupDataService: SignupDataService,
    private router: Router
  ) {}

  ngOnInit (): void {
    // Optionally load previously selected plan
  }

  selectPlan (plan: Plan): void {
    this.selectedPlan = plan
  }

  onCtaClick (plan: Plan, event: Event): void {
    event.stopPropagation()
    this.selectPlan(plan)
    // Optionally handle CTA logic here
  }

  goBack (): void {
    this.router.navigate(['/signup/personal-info'])
  }

  continue (): void {
    // Optionally save selected plan
    this.router.navigate(['/signup/add-ons'])
  }
}
