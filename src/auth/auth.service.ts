import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  private users: RegisterDto[] = [];

  register(registerDto: RegisterDto): RegisterDto {
    const highestIdUser = this.users.reduce(
      (prev, current) => (prev.id > current.id ? prev : current),
      { id: 0 },
    );
    const newUser = { id: highestIdUser.id + 1, ...registerDto };
    this.users.push(newUser);
    return newUser;
  }
}
