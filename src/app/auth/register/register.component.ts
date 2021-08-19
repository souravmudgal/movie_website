import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  iskiMaaKa: any;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit(form: NgForm) {
    this.iskiMaaKa = await this.authService.registerUser(form.value);


    if (this.iskiMaaKa.user.uid) {
      this.router.navigate(['/home']);
    }

    form.reset();
  }
}
