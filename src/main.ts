import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import Handlebars from 'handlebars';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/'
  });

  app.setViewEngine({
    engine: {
      handlebars: Handlebars
    },
    templates: join(__dirname, '..', 'views'),
    viewExt: 'hbs'
  });

  await app.listen(3000, '0.0.0.0');
}
void bootstrap();
