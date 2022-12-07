import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Add validation pipe to all route
  app.useGlobalPipes(new ValidationPipe());
  //Swagger UI (API Document)
  //Open Swagger at: http://localhost:3000/api
  const config = new DocumentBuilder()
    .setTitle('Cat API Example')
    .setDescription('The Cat API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
