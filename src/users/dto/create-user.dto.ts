import { IsEmail, IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['admin', 'customer'], {
    message: 'Valid role required',
  })
  role: 'admin' | 'customer';
}
