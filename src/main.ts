import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para que tu Frontend en Ferozo pueda hablar con esto
  app.enableCors(); 

  // Usar el puerto de la nube O el 3000 si estás en local
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
