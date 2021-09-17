import { Controller, Post, Body } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { AuthenticationService } from './authentication.service';
import { AuthorizationDto } from '../dto/authorization.dto';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  @ApiExcludeEndpoint(true)
  create(@Body() createAuthenticationDto: AuthorizationDto) {
    return this.authenticationService.token(createAuthenticationDto);
  }
}
