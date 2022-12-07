import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from 'src/schemas/owner.schema';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Owner.name,
        schema: OwnerSchema,
      },
    ]),
  ],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
