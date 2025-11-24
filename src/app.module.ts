import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [DocumentsModule], // <--- Aquí importamos tu nuevo módulo
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}