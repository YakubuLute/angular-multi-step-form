import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SignupWrapperComponent } from './features/signup/components/signup-wrapper/signup-wrapper.component'
import { PersonalInfoComponent } from './features/signup/components/personal-info/personal-info.component'
import { SelectPlanComponent } from './features/signup/components/select-plan/select-plan.component'
import { AddOnsComponent } from './features/signup/components/add-ons/add-ons.component'
import { SummaryComponent } from './features/signup/components/summary/summary.component'
import { StepGuard } from './core/gaurds/step.gaurd'

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  {
    path: 'signup',
    component: SignupWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal-info',
        pathMatch: 'full'
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
        canActivate: [StepGuard]
      },
      {
        path: 'select-plan',
        component: SelectPlanComponent,
        canActivate: [StepGuard]
      },
      {
        path: 'add-ons',
        component: AddOnsComponent,
        canActivate: [StepGuard]
      },
      {
        path: 'summary',
        component: SummaryComponent,
        canActivate: [StepGuard]
      }
    ]
  }
]
