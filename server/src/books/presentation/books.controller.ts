import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateBookUsecase } from '../application/create-book.usecase';
import { CreateBookDto } from '../dtos/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly createBookUsecase: CreateBookUsecase) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateBookDto) {
    const book = await this.createBookUsecase.execute(dto);
    return { success: true, book };
  }
}
