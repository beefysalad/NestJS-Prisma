import { Injectable } from '@nestjs/common';
import { Organizer, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateOrganizerDTO } from './dto/create.organizer.dto';
import { UpdateOrganizerDTO } from './dto/update.organizer.dto';

@Injectable()
export class OrganizerService {
  constructor(private prisma: PrismaService) {}

  public async createNewOrganizer(data: CreateOrganizerDTO): Promise<any> {
    return await this.prisma.organizer.create({
      data,
    });
  }
  public async getOrganizerEmail(email: string): Promise<Organizer> {
    return await this.prisma.organizer.findFirst({
      where: { email },
    });
  }
  public async updateOrganizerByName(
    email: string,
    data: UpdateOrganizerDTO
  ): Promise<any> {
    console.log(email);
    const updatedOrganizer = await this.prisma.organizer.update({
      where: {
        email,
      },
      data,
    });
    console.log(updatedOrganizer);
  }
}
