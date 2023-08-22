import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinationService } from './destinations.service';
import { DestinationsResolver } from './destinations.resolver';
import { Destination, DestinationSchema } from './destinations.schema';

@Module({
  imports: [
    // Intégration de Mongoose pour définir le modèle `Destination` et son schéma dans le contexte de ce module.
    MongooseModule.forFeature([
      { name: Destination.name, schema: DestinationSchema },
    ]),
  ],
  providers: [DestinationService, DestinationsResolver],
})
export class DestinationModule {}
