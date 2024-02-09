import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {
      msg: 'i have sign up'
    }
  }

  singin() {
    return {
      msg: 'i have log in'
    }
  }
}
