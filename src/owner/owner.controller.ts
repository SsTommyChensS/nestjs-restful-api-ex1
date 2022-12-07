import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOwnerDto } from 'src/dto/owner/create-owner.dto';
import { UpdateOwnerDto } from 'src/dto/owner/update-owner.dto';
import { Owner } from 'src/schemas/owner.schema';
import { OwnerService } from './owner.service';

@ApiTags('Owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @ApiOperation({ summary: 'Create owner ' })
  @Post('/create')
  async createOwner(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.createOwner(createOwnerDto);
  }

  @ApiOperation({ summary: 'Get all owners ' })
  @Get('/find-all')
  async findAllOwner(): Promise<Owner[]> {
    return this.ownerService.findAllOwner();
  }

  @ApiOperation({ summary: 'Find an owner ' })
  @Get('/find-one/:id')
  async findOneOwner(@Param('id') id: string): Promise<Owner> {
    return this.ownerService.findOneOwner(id);
  }

  @ApiOperation({ summary: 'Update owner profile ' })
  @Put('/update/:id')
  async updateOwner(
    @Param('id') id: string,
    @Body() updateOwnerDto: UpdateOwnerDto,
  ): Promise<Owner> {
    return this.ownerService.updateOwner(id, updateOwnerDto);
  }

  @ApiOperation({ summary: 'Delete an owner ' })
  @Delete('/detele/:id')
  async deleteOwner(@Param('id') id: string): Promise<Owner> {
    return this.ownerService.deleteOwner(id);
  }
}
