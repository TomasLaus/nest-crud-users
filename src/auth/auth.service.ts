import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor (private prisma: PrismaService) {}
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
