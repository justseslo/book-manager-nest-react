import { BookDocument } from '../schemas/book.schema';
import { BookEntity } from './book.entity';

export interface BookRepository {
  save(book: BookEntity): Promise<BookDocument>;
}
