import { Status } from '@shared/enums/status.enum';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  author: string;
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
  @IsString()
  @IsNotEmpty()
  status: Status;
  @IsString()
  comment: string;
}
