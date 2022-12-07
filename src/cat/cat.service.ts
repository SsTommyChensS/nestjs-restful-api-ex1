import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/cat/create-cat.dto';
import { UpdateCatDto } from 'src/dto/cat/update-cat.dto';
import { Cat, CatDocument } from 'src/schemas/cat.schema';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
  ) {}

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    const createCat = await this.catModel.create(createCatDto);
    return createCat;
  }

  async findAllCat(): Promise<Cat[]> {
    const cats = await this.catModel.find().exec();
    if (cats.length == 0) {
      throw new HttpException(
        'The list of existing cats is empty',
        HttpStatus.NOT_FOUND,
      );
    }
    return cats;
  }

  async findOneCat(id: string): Promise<Cat> {
    const cat = await this.catModel.findOne({ _id: id });
    if (cat) {
      return cat;
    }
    throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
  }

  async deleteCat(id: string): Promise<Cat> {
    const deletedCat = await this.catModel
      .findByIdAndRemove({ _id: id })
      .exec();
    if (deletedCat) {
      return deletedCat;
    }
    throw new HttpException('Cat not found to remove', HttpStatus.NOT_FOUND);
  }

  async updateCat(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const updatedCat = await this.catModel
      .findByIdAndUpdate({ _id: id }, updateCatDto, {
        new: true,
      })
      .exec();
    if (updatedCat) {
      return updatedCat;
    }
    throw new HttpException('Cat not found to update', HttpStatus.NOT_FOUND);
  }
}
