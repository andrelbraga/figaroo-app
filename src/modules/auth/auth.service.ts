import * as bcrypt from 'bcrypt';

import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { Customer } from '../customer/entities/customer.entity';
import { Employe } from '../employe/entities/employe.entity';
import { Employer } from '../employer/entities/employer.entity';
import { EntityEnum } from './enum/entity.enum';
import { EntityTypes } from 'src/types/constants';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-employe.dto';
import { Merchant } from '../merchant/entities/merchant.entity';
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
    const entityManager = getManager();
    let user;
    switch (entity) {
      case 'customer':
        user = await entityManager.findOne(Customer, {
          document: login.document,
        });
        break;
      case 'employe':
        user = await entityManager.findOne(Employe, {
          document: login.document,
        });
        break;
      case 'employer':
        user = await entityManager.findOne(Employer, {
          document: login.document,
        });
        break;
      case 'merchant':
        user = await entityManager.findOne(Merchant, {
          document: login.document,
        });
        break;
      default:
        throw new BadRequestException();
    }

    if (user) {
      const compareHash = await this.compare(user['password'], login.password);
      if (compareHash) {
        return this.login(user, `${entity}_id`);
      } else {
        throw new UnauthorizedException();
      }
    } else {
      throw new UnauthorizedException();
    }
  }

  async login(user: any, id: any) {
    const payload = { user: user, id };
    return {
      access_date: new Date(Date.now()),
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

  async doesEmailExists(entity, email) {
    const entityManager = getManager();
    let user;
    switch (entity) {
      case 'customer':
        user = await entityManager.findOne(Customer, {
          email: email,
        });
        break;
      case 'employe':
        user = await entityManager.findOne(Employe, {
          email: email,
        });
        break;
      case 'employer':
        user = await entityManager.findOne(Employer, {
          email: email,
        });
        break;
      default:
        throw new BadRequestException();
    }

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
