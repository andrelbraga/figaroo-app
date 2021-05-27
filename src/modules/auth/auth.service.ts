import * as bcrypt from 'bcrypt';

import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (
    private readonly configService: ConfigService,
    private jwtService: JwtService){ }

  async compare(hash: string, pass: string): Promise<any> {
  const compare = await bcrypt.compare(pass, hash)
    if(!compare) {
      throw new UnauthorizedException();
    }
    return compare
  }

  async login(user: any, id: any) {
    const payload = { user: user, id };
    return {
      access_token: this.jwtService.sign(payload, { 
        secret: this.configService.get('SECRET_KEY')
      }),
    };
  }

  async validate(token: string) {
    const tokenId: { user:string, id: string } = this.jwtService.verify(token, { 
      secret: this.configService.get('SECRET_KEY') 
    })
    if(tokenId.id) {
      return tokenId
    }
    throw new UnauthorizedException();
  }
}
