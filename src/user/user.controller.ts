import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createrUser(@Body() createrUser: CreateUserDto) {
    return {
      ...createrUser,
      password: undefined,
    };
  }
}
