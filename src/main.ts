import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // --- CAMBIO IMPORTANTE AQUI ---
  app.enableCors({
    origin: '*', // Permite que CUALQUIER página web se conecte (ideal para pruebas)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  // ------------------------------

  await app.listen(process.env.PORT || 3000);
}
bootstrap();