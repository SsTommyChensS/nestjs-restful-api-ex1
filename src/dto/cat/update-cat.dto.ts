import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateCatDto {
  @ApiProperty()
  @IsString({
    message: 'Field name must be a string!',
  })
  @Prop()
  name?: string;

  @ApiProperty()
  @IsNumber()
  @Prop()
  age?: number;

  @ApiProperty()
  @Prop()
  @IsString({
    message: 'Field breed must be a string!',
  })
  breed?: string;
}
