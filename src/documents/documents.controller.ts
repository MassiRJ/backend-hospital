import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DocumentsService } from './documents.service';

@Controller('documentos')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  findAll() {
    return this.documentsService.findAll();
  }

  @Get('categoria/:slug')
  findByCategory(@Param('slug') slug: string) {
    return this.documentsService.findByCategory(slug);
  }

  @Post()
  create(@Body() createDocDto: any) {
    return this.documentsService.create(createDocDto);
  }
}