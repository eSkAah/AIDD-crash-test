/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration CORS pour AIDD
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:4200'], // Vite et Angular dev servers
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 AIDD Backend is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
