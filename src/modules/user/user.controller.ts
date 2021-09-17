import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('email/:email')
  findOneEmail(@Param('email') email: string) {
    return this.userService.findOne({ email } as CreateUserDto);
  }

  @Get('phone/:phone')
  findOnePhone(@Param('phone') phone: string) {
    return this.userService.findOne({ phone } as CreateUserDto);
  }

  @Get('document/:document')
  findOneDocument(@Param('document') document: string) {
    return this.userService.findOne({ document } as CreateUserDto);
  }

  @Patch(':document')
  updateInactiveOrActive(
    @Param('document') document: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(document, updateUserDto);
  }
}
