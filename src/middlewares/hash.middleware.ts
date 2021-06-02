import * as bcrypt from 'bcrypt';

import { Body, Injectable, NestMiddleware } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class HashMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}
  async use(req: any, res: any, next: () => void) {
    const { body: { password } } = req
    if(password){
      const hashPassword = await bcrypt.hash(
        password,
        +this.configService.get('SALT_ROUNDS'),
      );
      req.body.password = hashPassword;
    }
    next();
  }
}
