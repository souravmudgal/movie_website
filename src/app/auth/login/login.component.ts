import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userCred: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    this.userCred = await this.authService.signIn(form.value).catch((e) => {
      if (e.code === 'auth/wrong-password') {
        alert('Wrong Password');
      } else if (e.code === 'auth/user-not-found') {
        alert(e.message);
      }
    });

    if (this.userCred.user.uid) {
      this.router.navigate(['/home']);
    }
    form.reset();
  }
}
