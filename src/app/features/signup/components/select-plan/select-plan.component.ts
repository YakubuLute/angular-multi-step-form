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


  constructor (
    private signupDataService: SignupDataService,
    private router: Router
  ) {}

  ngOnInit (): void {
    // Component logic will be implemented later
  }

  goBack (): void {
    this.router.navigate(['/signup/personal-info'])
  }

  continue (): void {
    this.router.navigate(['/signup/add-ons'])
  }
}
