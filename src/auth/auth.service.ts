import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {} // inject the Prisma service

  signup() {
    return { msg: 'Signup success' };
  }

  signin() {
    return { msg: 'Signin success' };
  }
}
