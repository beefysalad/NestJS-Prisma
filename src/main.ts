import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  // configuration for swagger, we can set different values
  const config = new DocumentBuilder()
    .setTitle('Patrick first Nest API')
    .setDescription('Super cool API that uses Nest to return Users')
    .setVersion('1.0')
    .build();

  // tells the swagger module to create the document
  // with the config options we just built up
  const document = SwaggerModule.createDocument(app, config);

  // sets the route for the docs, adds it to the our app
  // and passes in the documentation
  SwaggerModule.setup('/docs', app, document);
  await app.listen(3000);
}
bootstrap();
