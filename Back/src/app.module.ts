import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { DestinationModule } from './destinations/destinations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(
    //   'mongodb+srv://youssefouazizi:jIkb03Q66LMTpiRX@cluster0.wv4b1se.mongodb.net/?retryWrites=true&w=majority',
    // ),
    MongooseModule.forRoot('mongodb://localhost:27017/admin'),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schemas/schema.graphql',
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
    }),
    DestinationModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {}
}
