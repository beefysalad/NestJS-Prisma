import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  public async createUser(data: CreateUserDTO): Promise<void> {
    const newUser = await this.prisma.user.create({
      data,
    });
  }
  public async getUserByEmail(email: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { email },
      select: { email: true },
    });
    return user;
  }

  public async deleteUserByEmail(email: string): Promise<any> {
    const deletedUser = await this.prisma.user.delete({ where: { email } });
    if (deletedUser) {
      return 'Sucessfully Deleted the user!';
    }
  }
  public async updateUserByEmail(
    email: string,
    data: UpdateUserDTO
  ): Promise<any> {
    const updatedUser = await this.prisma.user.update({
      where: {
        email: email,
      },
      data,
    });
    console.log(updatedUser);
  }
}
