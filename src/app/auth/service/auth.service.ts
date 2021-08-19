import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}

  async registerUser(value: { name: string; email: string; password: string }) {
    const userCred = await this.afAuth.createUserWithEmailAndPassword(
      value.email,
      value.password
    );

    if (userCred.user?.uid) {
      localStorage.user = JSON.stringify(userCred.user);
    }

    return userCred;
  }

  async signIn(userCred: { email: string; password: string }) {
    const user = await this.afAuth.signInWithEmailAndPassword(
      userCred.email,
      userCred.password
    );

    if (user.user?.uid) {
      localStorage.user = JSON.stringify(user);
    }

    return user;
  }

  isLoggedIn() {
    return JSON.parse(localStorage.user || '{}');
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    return;
  }
}
