import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

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
}
