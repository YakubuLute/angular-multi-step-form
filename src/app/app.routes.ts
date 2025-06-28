
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SignupWrapperComponent } from './components/signup-wrapper/signup-wrapper.component'
import { PersonalInfoComponent } from './components/personal-info/personal-info.component'
import { SelectPlanComponent } from './components/select-plan/select-plan.component'
import { AddOnsComponent } from './components/add-ons/add-ons.component'
import { SummaryComponent } from './components/summary/summary.component'
import { StepGuard } from '../../core/guards/step.guard'


const routes: Routes = [
  {
    path: '',
    component: SignupWrapperComponent,
    children: [
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
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

export class SignupRoutingModule {}
