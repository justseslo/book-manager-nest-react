import { Module } from '@nestjs/common';
import { BooksController } from './presentation/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { BookRepositoryImpl } from './infrastructure/repositories/book.repository.impl';
import { CreateBookUsecase } from './application/create-book.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [
    { provide: 'BookRepository', useClass: BookRepositoryImpl },
    CreateBookUsecase,
    BookRepositoryImpl,
  ],
})
export class BooksModule {}
