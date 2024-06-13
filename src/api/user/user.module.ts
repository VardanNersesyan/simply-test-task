import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigModule } from '../../config';
import { UserRepository } from './user.repository';
import { WorkField } from '../work-field/entities/work-field.entity';

@Module({
  imports: [
    AppConfigModule,
    JwtModule,
    SequelizeModule.forFeature([User, WorkField]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
