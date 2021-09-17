import * as bcrypt from 'bcrypt';

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { AuthenticationService } from '../authentication/authentication.service';
import { AuthorizationDto } from '../dto/authorization.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthorizationService {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly userService: UserService,
  ) {}
  async validate(authorizationDto: AuthorizationDto) {
    const { email, phone, password } = authorizationDto;

    let userCurrent;
    if (email) {
      [userCurrent] = await this.userService.findOne({ email } as User);
    } else if (phone) {
      [userCurrent] = await this.userService.findOne({ phone } as User);
    }

    if (!userCurrent) {
      throw new NotFoundException();
    }

    const compare = await bcrypt.compare(password, userCurrent.password);
    if (!compare) {
      throw new UnauthorizedException();
    }

    delete userCurrent.password;

    return {
      user: userCurrent,
      token: this.authService.token(authorizationDto),
    };
  }
}
