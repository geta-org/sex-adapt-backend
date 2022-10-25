import { UserService } from '@models/user/user.service';
import { UserEntity } from '@user/entities/user.entity';
import { UserModule } from '@models/user/user.module';
import { RecoverPasswordEntity } from './../../models/recover-password/entities/recover-password.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecoverPasswordService } from './recover-password.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecoverPasswordEntity, UserEntity]),
    UserModule
  ],
  controllers: [],
  providers: [RecoverPasswordService, UserService],
  exports: [RecoverPasswordService]
})
export class RecoverPasswordModule {}