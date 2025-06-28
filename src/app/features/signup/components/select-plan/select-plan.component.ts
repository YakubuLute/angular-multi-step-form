

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SignupDataService } from '../../../../core/services/signup-data.service'

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent implements OnInit {
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
