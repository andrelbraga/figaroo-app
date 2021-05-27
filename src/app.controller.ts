import { Controller, Get } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('health-check')
@Controller()
export class AppController {
  @Get()
  getServerStatus(): string {
    return `${new Date(Date.now())}`;
  }
}
