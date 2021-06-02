import { HttpException } from '@nestjs/common';

export class AlreadyExisting extends HttpException {
  constructor() {
    super(`Already existing`, 409);
  }
}
