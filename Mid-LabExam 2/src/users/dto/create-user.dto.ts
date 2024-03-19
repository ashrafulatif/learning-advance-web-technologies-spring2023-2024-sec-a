import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'empty value! Name cannot be empty' })
  @Length(2)
  @IsString()
  name: string;
  @Length(50)
  @IsEmail()
  @IsNotEmpty({ message: 'empty value! Email cannot be empty' })
  email: string;
  @IsNotEmpty({ message: 'empty value! Password cannot be empty' })
  @Length(8, 20)
  @IsString()
  @Matches(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;'<>,.?\/\\~`\-]).*$/,
    {
      message:
        'Password must be include at least one uppercase letter, one number, and one special character.',
    },
  )
  password: string;
}
