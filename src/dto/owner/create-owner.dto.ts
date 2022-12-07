import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';
//Using class-validator decorator to check the validation of input fields in the incoming request
export class CreateOwnerDto {
  @ApiProperty()
  @IsString({
    message: 'Field fullname must be a string!',
  })
  @Prop({
    required: true,
  })
  fullname: string;

  @ApiProperty()
  @IsString({
    message: 'Field gender must be a string!',
  })
  @Prop({
    required: true,
  })
  gender: string;

  @ApiProperty()
  @IsNumber()
  @Min(18, {
    message: 'Owner must be 18 years or older',
  })
  @Prop({
    required: true,
  })
  age: number;

  @ApiProperty()
  @IsString({
    message: 'Field job must be a string!',
  })
  @Prop({
    required: true,
  })
  job: string;

  @ApiProperty()
  @IsString({
    message: 'Field address must be a string!',
  })
  @Prop({
    required: true,
  })
  address: string;
}
