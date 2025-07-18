import { Global, Module } from '@nestjs/common';
import { IsEmailAlreadyExistValidatorConstraint } from './validator/is-email-already-exist.validator';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  imports: [UserModule],
  providers: [IsEmailAlreadyExistValidatorConstraint],
  exports: [IsEmailAlreadyExistValidatorConstraint],
})
export class CommonModule {}
