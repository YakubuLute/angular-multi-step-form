// src/app/core/guards/step.guard.ts
import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { SignupDataService } from '../services/signup-data.service'

@Injectable({
  providedIn: 'root'
})
export class StepGuard implements CanActivate {
  private stepRouteMap: { [key: string]: number } = {
    'personal-info': 1,
    'select-plan': 2,
    'add-ons': 3,
    summary: 4
  }

  constructor (
    private signupDataService: SignupDataService,
    private router: Router
  ) {}

  canActivate (route: ActivatedRouteSnapshot): boolean {
    const routeName = route.routeConfig?.path || ''
    const targetStep = this.stepRouteMap[routeName]

    if (!targetStep) {
      this.router.navigate(['/signup/personal-info'])
      return false
    }

    // Always allow access to step 1
    if (targetStep === 1) {
      return true
    }

    // Check if previous steps are completed
    for (let i = 1; i < targetStep; i++) {
      if (!this.signupDataService.isStepCompleted(i)) {
        // Redirect to the first incomplete step
        const redirectStep = this.getRouteForStep(i)
        this.router.navigate([`/signup/${redirectStep}`])
        return false
      }
    }

    return true
  }

  private getRouteForStep (stepNumber: number): string {
    const routes = Object.keys(this.stepRouteMap)
    return (
      routes.find(route => this.stepRouteMap[route] === stepNumber) ||
      'personal-info'
    )
  }
}
