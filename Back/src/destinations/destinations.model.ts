import { ObjectType, Field, ID } from '@nestjs/graphql';

// Utilisation du décorateur `@ObjectType()` pour indiquer que `Destination` est un type objet GraphQL.
@ObjectType()
export class Destination {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  image: string;

  @Field()
  habitant: string;

  @Field()
  revenue: string;

  @Field()
  superficie: string;

  @Field()
  hotel: string;

  @Field({ defaultValue: false })
  isBlocked: boolean;
}
