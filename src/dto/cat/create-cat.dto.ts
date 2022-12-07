import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
//Using class-validator decorator to check the validation of input fields in the incoming request
export class CreateCatDto {
  @ApiProperty()
  @IsString({
    message: 'Field name must be a string!',
  })
  @Prop()
  name: string;

  @ApiProperty()
  @IsNumber()
  @Prop()
  age: number;

  @ApiProperty()
  @Prop()
  @IsString({
    message: 'Field breed must be a string!',
  })
  breed: string;
}
