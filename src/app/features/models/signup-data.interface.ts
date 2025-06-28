import { PersonalInfo, Plan, AddOn } from './index'

export interface SignupData {
  personalInfo: PersonalInfo
  selectedPlan: Plan | null
  addOns: AddOn[]
  currentStep: number
}
