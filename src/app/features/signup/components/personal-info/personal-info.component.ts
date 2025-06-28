// src/app/features/signup/components/personal-info/personal-info.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SignupDataService } from '../../../../core/services/signup-data.service';
import { PersonalInfo } from '../../models/personal-info.interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  personalInfoForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private signupDataService: SignupDataService,
    private router: Router
  ) {
    this.personalInfoForm = this.createForm();
  }

  ngOnInit(): void {
    // Load existing data if available
    this.loadExistingData();

    // Auto-save form changes
    this.personalInfoForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        if (this.personalInfoForm.valid) {
          this.signupDataService.updatePersonalInfo(value);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, this.phoneValidator]]
    });
  }

  private loadExistingData(): void {
    const currentData = this.signupDataService.getCurrentData();
    if (currentData.personalInfo) {
      this.personalInfoForm.patchValue(currentData.personalInfo);
    }
  }

  private phoneValidator(control: any) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (control.value && !phoneRegex.test(control.value.replace(/\s/g, ''))) {
      return { invalidPhone: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.personalInfoForm.valid) {
      this.isLoading = true;

      const formValue: PersonalInfo = this.personalInfoForm.value;
      this.signupDataService.updatePersonalInfo(formValue);

      // Simulate API call delay
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/signup/select-plan']);
      }, 500);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.personalInfoForm.controls).forEach(key => {
      const control = this.personalInfoForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.personalInfoForm.get(fieldName);

    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${this.getFieldDisplayName(fieldName)} is required`;
      }
      if (control.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (control.errors['minlength']) {
        return `${this.getFieldDisplayName(fieldName)} must be at least ${control.errors['minlength'].requiredLength} characters`;
      }
      if (control.errors['invalidPhone']) {
        return 'Please enter a valid phone number';
      }
    }

    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const displayNames: { [key: string]: string } = {
      name: 'Name',
      email: 'Email',
      phoneNumber: 'Phone Number'
    };
    return displayNames[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.personalInfoForm.get(fieldName);
    return !!(control?.invalid && control.touched);
  }
}


