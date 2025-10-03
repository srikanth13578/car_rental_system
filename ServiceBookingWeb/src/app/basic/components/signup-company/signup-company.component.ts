import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.scss']
})
export class SignupCompanyComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      this.notification.warning('Form Invalid', 'Please fill all required fields correctly.');
      return;
    }

    this.authService.registerCompany(this.validateForm.value).subscribe({
      next: () => {
        this.notification.success('SUCCESS', 'Signup successful', { nzDuration: 5000 });
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        this.notification.error('ERROR', `${error.error}`, { nzDuration: 5000 });
      }
    });
  }
}
