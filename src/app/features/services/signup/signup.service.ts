// src/app/core/services/signup-data.service.ts
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { SignupData, PersonalInfo, Plan, AddOn } from '../../models/index'

@Injectable({
  providedIn: 'root'
})
export class SignupDataService {
  private readonly initialData: SignupData = {
    personalInfo: {
      name: '',
      email: '',
      phoneNumber: ''
    },
    selectedPlan: null,
    addOns: [],
    currentStep: 1
  }

  private signupDataSubject = new BehaviorSubject<SignupData>(this.initialData)
  public signupData$ = this.signupDataSubject.asObservable()

  constructor () {}

  // Get current signup data
  getCurrentData (): SignupData {
    return this.signupDataSubject.value
  }

  // Update personal info
  updatePersonalInfo (personalInfo: PersonalInfo): void {
    const currentData = this.getCurrentData()
    this.signupDataSubject.next({
      ...currentData,
      personalInfo
    })
  }

  // Update selected plan
  updateSelectedPlan (plan: Plan): void {
    const currentData = this.getCurrentData()
    this.signupDataSubject.next({
      ...currentData,
      selectedPlan: plan
    })
  }

  // Update add-ons
  updateAddOns (addOns: AddOn[]): void {
    const currentData = this.getCurrentData()
    this.signupDataSubject.next({
      ...currentData,
      addOns
    })
  }

  // Update current step
  updateCurrentStep (step: number): void {
    const currentData = this.getCurrentData()
    this.signupDataSubject.next({
      ...currentData,
      currentStep: step
    })
  }

  // Check if step is completed
  isStepCompleted (stepNumber: number): boolean {
    const data = this.getCurrentData()

    switch (stepNumber) {
      case 1:
        return !!(
          data.personalInfo.name &&
          data.personalInfo.email &&
          data.personalInfo.phoneNumber
        )
      case 2:
        return !!data.selectedPlan
      case 3:
        return true // Add-ons are optional
      case 4:
        return this.isStepCompleted(1) && this.isStepCompleted(2)
      default:
        return false
    }
  }

  // Reset all data
  resetData (): void {
    this.signupDataSubject.next(this.initialData)
  }

  // Get summary of all selections
  getSummary (): any {
    const data = this.getCurrentData()
    const selectedAddOns = data.addOns.filter(addon => addon.selected)
    const totalAddOnPrice = selectedAddOns.reduce(
      (sum, addon) => sum + addon.price,
      0
    )

    const planPrice = data.selectedPlan?.price || 0
    const planPriceNum =
      typeof planPrice === 'string'
        ? parseFloat(planPrice.replace(/[^0-9.]/g, ''))
        : planPrice

    return {
      personalInfo: data.personalInfo,
      plan: data.selectedPlan,
      addOns: selectedAddOns,
      totalPrice: planPriceNum + totalAddOnPrice
    }
  }
}
