import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { getUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getme(@getUser() user: User, @getUser('email') email: string) {
    // getUser() is a decorator that returns the user from the request. Email is optional
    console.log(email);
    return user;
  }
}
