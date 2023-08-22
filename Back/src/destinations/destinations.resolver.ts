import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Destination } from './destinations.model';
import { DestinationService } from './destinations.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DestinationDocument } from './destinations.schema';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

// Déclaration du résolveur pour le modèle `Destination`.
@Resolver(() => Destination)
export class DestinationsResolver {
  // Injection des dépendances : le service de destination et le modèle Mongoose pour Destination.
  constructor(
    private readonly destinationService: DestinationService,
    @InjectModel('Destination')
    private readonly destinationModel: Model<DestinationDocument>,
  ) {}

  // Définition d'une requête GraphQL pour obtenir toutes les destinations.
  @Query(() => [Destination])
  async destinations() {
    const results = await this.destinationService.findAll();
    // Conversion des résultats pour les renvoyer en tant que tableau de Destination.
    return results.map((dest) => ({
      ...dest.toObject(),
      id: dest._id.toString(),
      habitant: dest.habitant || '',
      hotel: dest.hotel || '',
      revenue: dest.revenue || '',
      superficie: dest.superficie || '',
    }));
  }

  // Définition d'une mutation pour créer une nouvelle destination.
  @Mutation(() => Destination)
  async createDestination(
    @Args('name') name: string,
    @Args('address') address: string,
    @Args('image') image: string,
    @Args('habitant') habitant: string,
    @Args('hotel') hotel: string,
    @Args('revenue') revenue: string,
    @Args('superficie') superficie: string,
  ) {
    return this.destinationService.create({
      name,
      address,
      image,
      habitant,
      hotel,
      revenue,
      superficie,
    });
  }

  // Définition d'une mutation pour modifier une destination.
  @Mutation(() => Destination)
  async editDestination(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('address') address: string,
    @Args('image') image: string,
    @Args('habitant') habitant: string,
    @Args('hotel') hotel: string,
    @Args('revenue') revenue: string,
    @Args('superficie') superficie: string,
    @Args('isBlocked') isBlocked: boolean,
  ) {
    try {
      const destination = await this.destinationModel.findByIdAndUpdate(
        id,
        {
          $set: {
            name,
            address,
            image,
            habitant,
            hotel,
            revenue,
            superficie,
            isBlocked,
          },
        },
        { new: true },
      );

      if (!destination) {
        throw new NotFoundException('Destination not found');
      }

      return {
        ...destination.toObject(),
        id: destination._id.toString(),
        hotel: destination.hotel || '',
      };
    } catch (error) {
      console.error(error);
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException('Error editing destination');
      }
    }
  }

  // Définition d'une mutation pour supprimer une destination.
  @Mutation(() => Boolean)
  async deleteDestination(@Args('id') id: string): Promise<boolean> {
    try {
      const deleteResult = await this.destinationModel.deleteOne({ _id: id });
      return deleteResult.deletedCount > 0;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error deleting destination');
    }
  }

  // Définition d'une mutation pour bloquer/débloquer une destination.
  @Mutation(() => Destination)
  async toggleBlockDestination(@Args('id') id: string): Promise<Destination> {
    const destination: DestinationDocument =
      await this.destinationService.toggleBlock(id);
    return {
      ...destination.toObject(),
      id: destination._id.toString(),
    };
  }
}
