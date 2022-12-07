import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOwnerDto } from 'src/dto/owner/create-owner.dto';
import { UpdateOwnerDto } from 'src/dto/owner/update-owner.dto';
import { Owner, OwnerDocument } from 'src/schemas/owner.schema';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name)
    private readonly ownerModel: Model<OwnerDocument>,
  ) {}

  async createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const createOwner = await this.ownerModel.create(createOwnerDto);
    return createOwner;
  }

  async findAllOwner(): Promise<Owner[]> {
    const owners = await this.ownerModel.find().exec();
    if (owners.length == 0) {
      throw new HttpException(
        'The list of existing owners is empty',
        HttpStatus.NOT_FOUND,
      );
    }
    return owners;
  }

  async findOneOwner(id: string): Promise<Owner> {
    const owner = await this.ownerModel.findOne({ _id: id });
    if (owner) {
      return owner;
    }
    throw new HttpException('Owner not found', HttpStatus.NOT_FOUND);
  }

  async updateOwner(
    id: string,
    updateOwnerDto: UpdateOwnerDto,
  ): Promise<Owner> {
    const updatedOwner = await this.ownerModel
      .findByIdAndUpdate({ _id: id }, updateOwnerDto, {
        new: true,
      })
      .exec();
    if (updatedOwner) {
      return updatedOwner;
    }
    throw new HttpException('Owner not found to update', HttpStatus.NOT_FOUND);
  }

  async deleteOwner(id: string): Promise<Owner> {
    const deletedOwner = await this.ownerModel
      .findByIdAndRemove({ _id: id })
      .exec();
    if (deletedOwner) {
      return deletedOwner;
    }
    throw new HttpException('Owner not found to remove', HttpStatus.NOT_FOUND);
  }
}
