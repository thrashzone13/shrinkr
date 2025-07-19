import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unrecognized fields
      forbidNonWhitelisted: false, // throws error on unrecognized fields
      transform: true, // auto-transforms payloads to DTO instances
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalInterceptors(new ResponseInterceptor());
  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT') as number);
}
void bootstrap();
