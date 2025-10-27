import { Inject, Injectable } from '@nestjs/common';
import { BookEntity } from '../domain/book.entity';
import { v4 as uuid } from 'uuid';
import { CreateBookDto } from '../dtos/create-book.dto';
import type { BookRepository } from '../domain/book.repository';
@Injectable()
export class CreateBookUsecase {
  constructor(
    @Inject('BookRepository') private readonly bookRepo: BookRepository,
  ) {}
  async execute(dto: CreateBookDto) {
    const id = uuid();
    const book = new BookEntity(
      id,
      dto.title,
      dto.author,
      dto.imageUrl,
      dto.status,
      dto.comment,
    );
    return this.bookRepo.save(book);
  }
}
