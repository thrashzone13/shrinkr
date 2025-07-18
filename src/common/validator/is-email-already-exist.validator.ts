import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { UserService } from '../../user/user.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailAlreadyExistValidatorConstraint
  implements ValidatorConstraintInterface
{
  constructor(private readonly userService: UserService) {}

  async validate(email: string) {
    if (!email) {
      return true;
    }
    const user = await this.userService.findOneByEmail(email);
    return null === user;
  }

  defaultMessage(args: ValidationArguments) {
    return `Email (${args.value}) is already in use`;
  }
}
