import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserEnum } from './enums/user.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.updatedAt = new Date(Date.now());
    createUserDto.status = UserEnum.ACTIVE;
    const createUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(createUser);
  }

  async findOne(createUserDto: CreateUserDto) {
    const user = await this.userRepository.find(createUserDto);
    return user || [];
  }

  async update(document: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update(document, updateUserDto);
    return user || [];
  }
}
