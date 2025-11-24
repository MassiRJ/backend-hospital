import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  // Buscar por categoría
  async findByCategory(category: string) {
    return this.prisma.documentos.findMany({
      where: { 
        categoria: category,
        es_visible: true 
      },
      orderBy: { fecha_publicacion: 'desc' }
    });
  }

  // Crear nuevo documento
  async create(data: any) {
    return this.prisma.documentos.create({ data });
  }
  
  // Obtener todos (opcional)
  async findAll() {
    return this.prisma.documentos.findMany();
  }
}