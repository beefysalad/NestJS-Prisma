import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { OrganizerController } from './organizer.controller';
import { OrganizerService } from './organizer.service';
@Module({
  imports: [],
  controllers: [OrganizerController],
  providers: [PrismaService, OrganizerService],
})
export class OrganizerModule {}
