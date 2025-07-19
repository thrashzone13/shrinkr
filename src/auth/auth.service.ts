import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwt: JwtService,
  ) {}

  async signup(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return await this.userRepo.save({ ...dto, password: hashedPassword });
  }

  async generateAccessToken(id: number) {
    const user: User = await this.userRepo.findOneByOrFail({ id });
    return this.jwt.signAsync({
      id: user.id,
      email: user.email,
    });
  }
}
