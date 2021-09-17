import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorizationService } from './authorization.service';
import { AuthorizationDto } from '../dto/authorization.dto';

@ApiTags('Authorization')
@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post()
  create(@Body() authorizationDto: AuthorizationDto) {
    return this.authorizationService.validate(authorizationDto);
  }
}
