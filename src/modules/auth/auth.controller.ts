import { Controller, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-employe.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(':entity')
  login(@Param('entity') entity: string, @Body() loginAuthDto: LoginAuthDto) {
    return this.authService.auth(loginAuthDto, entity);
  }
}
