


// src/app/features/signup/components/summary/summary.component.ts
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SignupDataService } from '../../../../core/services/signup-data.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  constructor (
    private signupDataService: SignupDataService,
    private router: Router
  ) {}

  ngOnInit (): void {
    // Component logic will be implemented later
  }

  goBack (): void {
    this.router.navigate(['/signup/add-ons'])
  }

  confirm (): void {
    // Handle form submission
    console.log('Form submitted!')
  }
}
