import {
  Body,
  Controller,
  Get,
  Post,
  ParseIntPipe,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';
import { UserService } from './user.service';

@Controller(UserController.USER_CONTROLLER_ROUTE)
export class UserController {
  public static readonly USER_CONTROLLER_ROUTE = '/user';
  constructor(private userService: UserService) {}
  @Get()
  async sayHelloWorld(): Promise<string> {
    return 'Hello world!';
  }
  @Post('new')
  async createNewUser(@Body() createUserDTO: CreateUserDTO): Promise<any> {
    return this.userService.createUser(createUserDTO);
  }
  @Get('get/user/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.getUserByEmail(email);
  }
  @Delete('delete/user/:email')
  async deleteUserByEmail(@Param('email') email: string): Promise<any> {
    return this.userService.deleteUserByEmail(email);
  }
  @Patch('update/user/:email')
  async updateUserByEmail(
    @Param('email') email: string,
    @Body() updateUserDTO: UpdateUserDTO
  ): Promise<any> {
    return this.userService.updateUserByEmail(email, updateUserDTO);
  }
}
