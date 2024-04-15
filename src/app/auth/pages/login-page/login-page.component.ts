import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  public loginForm: FormGroup = this.fb.group({
    email: ['admin@admin.com', [Validators.required, Validators.email]],
    password: ['admin123456', [Validators.required, Validators.minLength(8)]],
  });
  ngOnInit(): void {}
  login() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: (message) => {
        this.toastrService.error(message);
      },
    });
  }
}
