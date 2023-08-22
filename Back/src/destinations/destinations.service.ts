import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Destination, DestinationDocument } from './destinations.schema';

@Injectable()
export class DestinationService {
  constructor(
    @InjectModel(Destination.name)
    private destinationModel: Model<DestinationDocument>,
  ) {}

  async findAll(): Promise<DestinationDocument[]> {
    return this.destinationModel.find().exec();
  }

  async create(destinationData: Partial<Destination>): Promise<Destination> {
    const createdDestination = new this.destinationModel(destinationData);
    return createdDestination.save();
  }
  async delete(id: string): Promise<void> {
    await this.destinationModel.findByIdAndDelete(id).exec();
  }
  async toggleBlock(id: string): Promise<DestinationDocument> {
    const destination = await this.destinationModel.findById(id);
    if (!destination) {
      throw new NotFoundException('Destination not found');
    }

    destination.isBlocked = !destination.isBlocked;
    await destination.save();

    return destination;
  }
}


