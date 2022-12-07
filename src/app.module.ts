import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/rest-api'),
    CatModule,
    OwnerModule,
  ],
})
export class AppModule {}
