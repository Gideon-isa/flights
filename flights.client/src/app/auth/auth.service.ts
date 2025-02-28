import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  current?: User;

  loginUser(user: User) {
    console.log("Log in the user with email " + user.email)
    this.current = user;
  }
}

interface User {
  email: string
}
