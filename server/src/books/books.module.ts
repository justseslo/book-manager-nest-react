import { Module } from '@nestjs/common';
import { BooksController } from './presentation/books.controller';

@Module({ controllers: [BooksController] })
export class BooksModule {}
