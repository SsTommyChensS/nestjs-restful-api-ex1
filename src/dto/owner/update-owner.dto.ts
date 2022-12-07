import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
//Using class-validator decorator to check the validation of input fields in the incoming request
export class UpdateOwnerDto {
  @ApiProperty()
  @IsOptional()
  @Prop({
    required: false,
  })
  @IsString({
    message: 'Field fullname must be a string!',
  })
  fullname?: string;

  @ApiProperty()
  @IsOptional()
  @IsString({
    message: 'Field gender must be a string!',
  })
  @Prop()
  gender?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(18, {
    message: 'Owner must be 18 years or older',
  })
  @Prop()
  age?: number;

  @ApiProperty()
  @IsOptional()
  @Prop()
  @IsString({
    message: 'Field job must be a string!',
  })
  job?: string;

  @ApiProperty()
  @IsOptional()
  @Prop()
  @IsString({
    message: 'Field address must be a string!',
  })
  address?: string;
}
