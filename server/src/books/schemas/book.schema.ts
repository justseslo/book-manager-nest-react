import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '@shared/enums/status.enum';

@Schema({ _id: false })
export class Book {
  @Prop({ required: true, unique: true })
  _id: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  author: string;
  @Prop({ required: true })
  imageUrl: string;
  @Prop({ required: true })
  status: Status;
}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);
