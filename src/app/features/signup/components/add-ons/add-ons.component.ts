import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SignupDataService } from '../../../services/signup/signup.service'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddOnsComponent implements OnInit {
  constructor (
    private signupDataService: SignupDataService,
    private router: Router
  ) {}

  ngOnInit (): void {
    // Component logic will be implemented later
  }

  goBack (): void {
    this.router.navigate(['/signup/select-plan'])
  }

  continue (): void {
    this.router.navigate(['/signup/summary'])
  }
}
