import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import Handlebars from 'handlebars';
import { join } from 'path';
import { AppModule } from './app.module';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/'
  });

  const secureHandlebars = allowInsecurePrototypeAccess(Handlebars);

  app.setViewEngine({
    engine: {
      handlebars: secureHandlebars
    },
    templates: join(__dirname, '..', 'views')
  });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
