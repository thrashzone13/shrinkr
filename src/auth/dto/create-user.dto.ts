import { IsEmailAlreadyExistValidatorConstraint } from '../../common/validator/is-email-already-exist.validator';
import {
  IsEmail,
  IsString,
  MinLength,
  IsNotEmpty,
  Validate,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @Validate(IsEmailAlreadyExistValidatorConstraint)
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(3)
  firstName?: string;

  @IsString()
  @MinLength(3)
  lastName?: string;
}
