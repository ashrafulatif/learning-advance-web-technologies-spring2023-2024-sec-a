import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string) {
    const user = await this.userService.findByusername(name);
    if (!user) {
      console.log('not found');
      throw new BadRequestException();
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('wrong pass');
      throw new UnauthorizedException();
    }
    return user;
  }
  async login(user: User) {
    const payload = {
      username: user.name,
      sub: {
        email: user.email,
      },
    };
    return {
      message: 'login successful',
      ...user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
