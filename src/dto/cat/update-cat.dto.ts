import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';
import { Types } from 'mongoose';

export class UpdateCatDto {
  @ApiProperty()
  @IsOptional()
  @IsString({
    message: 'Field name must be a string!',
  })
  @Prop()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Prop()
  age?: number;

  @ApiProperty()
  @IsOptional()
  @Prop()
  @IsString({
    message: 'Field breed must be a string!',
  })
  breed?: string;

  @ApiProperty()
  @IsOptional()
  @IsObjectId({
    message: 'Field owner must be ObejctId',
  })
  @Prop()
  owner: Types.ObjectId;
}
