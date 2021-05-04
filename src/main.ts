import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('GoRestaurant')
    .setDescription('GoRestaurant API')
    .setVersion('1.0')
    .addTag('restaurant')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);
  SwaggerModule.setup('', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
