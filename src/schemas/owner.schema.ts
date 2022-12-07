import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @ApiProperty()
  @Prop()
  fullname: string;

  @ApiProperty()
  @Prop()
  gender: string;

  @ApiProperty()
  @Prop()
  age: number;

  @ApiProperty()
  @Prop()
  job: string;

  @ApiProperty()
  @Prop()
  address: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
