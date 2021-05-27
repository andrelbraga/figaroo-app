import { AuthService } from './auth.service';
import { ConfigModule, } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    JwtModule.register({}),
    ConfigModule.forRoot({
        expandVariables: true,
    }),
  ],
  providers: [AuthService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
