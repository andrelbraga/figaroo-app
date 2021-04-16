import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configService } from 'scripts/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(process.env.API_VERSION);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Figaroo service')
    .setDescription('Figaroo service for implementation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if (['development', 'staging'].includes(process.env.NODE_ENV)) {
    SwaggerModule.setup(`${process.env.API_VERSION}/swagger-ui`, app, document);
  }
  await app.listen(configService.getPort());
}
bootstrap();
