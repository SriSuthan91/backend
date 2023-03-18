import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlsController } from './urls/urls.controller';
import { UrlsModule } from './urls/urls.module';
import { UrlsService } from './urls/urls.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './entity/url.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'suthan',
      password: 'suthan123',
      database: 'url-shortner',
      entities: [Url],
      synchronize: true,
    }),UrlsModule],
  controllers: [AppController, UrlsController],
  providers: [AppService, UrlsService],
})
export class AppModule {}
