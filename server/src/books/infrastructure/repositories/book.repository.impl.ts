import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookEntity } from 'src/books/domain/book.entity';
import { BookRepository } from 'src/books/domain/book.repository';
import { Book, BookDocument } from 'src/books/schemas/book.schema';
@Injectable()
export class BookRepositoryImpl implements BookRepository {
  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<BookDocument>,
  ) {}
  async save(book: BookEntity): Promise<BookDocument> {
    return this.bookModel.create({ ...book, _id: book.getId() });
  }
}
