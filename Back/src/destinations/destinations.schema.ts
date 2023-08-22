import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Destination {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  image: string;

  @Prop()
  habitant: string;

  @Prop()
  hotel: string;

  @Prop()
  revenue: string;

  @Prop()
  superficie: string;

  @Prop({ default: false })
  isBlocked: boolean;
}

export type DestinationDocument = Destination & Document;
export const DestinationSchema = SchemaFactory.createForClass(Destination);
