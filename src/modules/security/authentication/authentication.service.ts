import { AuthorizationDto } from '../dto/authorization.dto';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  token(createAuthenticationDto: AuthorizationDto) {
    return {
      access_date: new Date(Date.now()),
      access_token: this.jwtService.sign(createAuthenticationDto, {
        secret: this.configService.get('SECRET_KEY'),
      }),
    };
  }
}
