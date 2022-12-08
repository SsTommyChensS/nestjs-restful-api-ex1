import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Owner } from './owner.schema';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  age: number;

  @ApiProperty()
  @Prop()
  breed: string;

  //One to many relation: 1 owner -> many cats
  @ApiProperty()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Owner.name,
    required: true,
  })
  @Type(() => Owner)
  owner: Types.ObjectId;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
