import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Signup success' };
  }

  signin() {
    return { msg: 'Signin success' };
  }
}
