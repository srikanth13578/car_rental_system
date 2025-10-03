import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent implements OnInit {

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
      lastname: [null, [Validators.required]],
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

    this.authService.registerClient(this.validateForm.value).subscribe({
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
