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
import { CreateCatDto } from 'src/dto/cat/create-cat.dto';
import { UpdateCatDto } from 'src/dto/cat/update-cat.dto';
import { Cat } from 'src/schemas/cat.schema';
import { CatService } from './cat.service';

@ApiTags('Cat')
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @ApiOperation({ summary: 'Create cat' })
  @Post('/create')
  async createCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catService.createCat(createCatDto);
  }

  @ApiOperation({ summary: 'Find all cats' })
  @Get('/find-all')
  async findAllCat(): Promise<Cat[]> {
    return this.catService.findAllCat();
  }

  @ApiOperation({ summary: 'Find cat by id' })
  @Get('/find-one/:id')
  async findOneCat(@Param('id') id: string): Promise<Cat | any> {
    return this.catService.findOneCat(id);
  }

  @ApiOperation({ summary: 'Find cats by owner id' })
  @Get('/find-by-owner/:owner_id')
  async findCatsByOwner(@Param('owner_id') owner_id: string): Promise<Cat[]> {
    return this.catService.findCatsByOwner(owner_id);
  }

  @ApiOperation({ summary: 'Delete cat by id' })
  @Delete('/delete/:id')
  async deleteCat(@Param('id') id: string): Promise<Cat> {
    return this.catService.deleteCat(id);
  }

  @ApiOperation({ summary: 'Update cat by id' })
  @Put('/update/:id')
  async updateCat(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<Cat> {
    return this.catService.updateCat(id, updateCatDto);
  }
}
