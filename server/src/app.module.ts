import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => ({uri:configService.get<string>("MONGO")}),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
