import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-employe.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth()
  @Get('auth/login')
  async loginn(@Param() loginAuthDto: LoginAuthDto) {
    return loginAuthDto;
  }

  @Post(':entity')
  login(@Param('entity') entity: string, @Body() loginAuthDto: LoginAuthDto) {
    return this.authService.auth(loginAuthDto, entity);
  }

  @Get(':entity/:email')
  doesEmailExists(
    @Param('entity') entity: string,
    @Param('email') email: string,
  ) {
    return this.authService.doesEmailExists(entity, email);
  }
}
