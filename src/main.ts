import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import Handlebars from 'handlebars';
import { join } from 'path';
import view from '@fastify/view';
import { AppModule } from './app.module';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

async function bootstrap() {
  const adapter = new FastifyAdapter();

  await adapter.getInstance().register(view, {
    engine: {
      handlebars: allowInsecurePrototypeAccess(Handlebars)
    },
    root: join(__dirname, '..', 'views'),
    includeViewExtension: true
  });

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/'
  });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
