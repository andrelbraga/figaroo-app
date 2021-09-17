import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { configService } from 'scripts/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: true,
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(process.env.API_VERSION);

  const config = new DocumentBuilder()
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'access-token',
    )
    .setTitle('Figaroo service')
    .setDescription('Figaroo service for implementation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  if (['development', 'staging'].includes(process.env.NODE_ENV)) {
    SwaggerModule.setup(
      `${process.env.API_VERSION}/swagger-ui`,
      app,
      document,
      {
        swaggerOptions: {
          docExpansion: 'none',
        },
      },
    );
  }
  await app.listen(configService.getPort());
}
bootstrap();
