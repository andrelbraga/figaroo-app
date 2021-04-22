import { Controller, Get, UseGuards } from '@nestjs/common';
import { TokenGuard } from './guard/token.guard';

@Controller()
export class AppController {
  @Get()
  @UseGuards(TokenGuard)
  getServerStatus(): string {
    return 'Hello Word';
  }
}
