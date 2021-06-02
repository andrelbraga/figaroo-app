import * as bcrypt from 'bcrypt';

import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { EntityEnum } from './enum/entity.enum';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-employe.dto';
import { getManager } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async compare(hash: string, pass: string): Promise<any> {
    const compare = await bcrypt.compare(pass, hash);
    if (!compare) {
      throw new UnauthorizedException();
    }
    return compare;
  }

  async auth(login: LoginAuthDto, entity: string) {
    /*     const entityManager = getManager();
    const user = await entityManager.findOne(EntityEnum[entity], {
      document: login.document,
    });
    if (user) {
      await this.compare(user['password'], login.password)
      return this.login(user, `${entity}_id`)
    }
    throw new UnauthorizedException(); */
    return this.login('user', `${entity}_id`);
  }

  async login(user: any, id: any) {
    const payload = { user: user, id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: this.configService.get('SECRET_KEY'),
      }),
    };
  }

  async validate(token: string) {
    const tokenId: { user: string; id: string } = this.jwtService.verify(
      token,
      {
        secret: this.configService.get('SECRET_KEY'),
      },
    );
    if (tokenId.id) {
      return tokenId;
    }
    throw new UnauthorizedException();
  }
}
