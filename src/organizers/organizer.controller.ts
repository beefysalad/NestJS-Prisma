import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Organizer } from '@prisma/client';
import { CreateOrganizerDTO } from './dto/create.organizer.dto';
import { UpdateOrganizerDTO } from './dto/update.organizer.dto';
import { OrganizerService } from './organizer.service';

@Controller(OrganizerController.ORGANIZER_CONTROLLER_ROUTE)
export class OrganizerController {
  public static readonly ORGANIZER_CONTROLLER_ROUTE = '/organizer';
  constructor(private readonly organizerService: OrganizerService) {}
  @Get('goodbye')
  async sayHelloWorld(): Promise<string> {
    return 'Goodbye world!';
  }

  @Post('new')
  public async createNewOrganizer(
    @Body() createOrganizerDTO: CreateOrganizerDTO
  ): Promise<any> {
    const newOrganizer = await this.organizerService.createNewOrganizer(
      createOrganizerDTO
    );
    console.log(newOrganizer);
  }

  @Get('find/:name')
  public async findOrganizerByName(
    @Param('name') name: string
  ): Promise<Organizer> {
    return await this.organizerService.getOrganizerEmail(name);
  }

  @Patch('update/:email')
  public async updateOrganizer(
    @Param('email') email: string,
    @Body() updateOrganizerDTO: UpdateOrganizerDTO
  ): Promise<Organizer> {
    console.log(email);
    return await this.organizerService.updateOrganizerByName(
      email,
      updateOrganizerDTO
    );
  }
}
