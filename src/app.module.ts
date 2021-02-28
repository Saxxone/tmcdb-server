import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './comments/comments.module';
import { InviteesModule } from './invitees/invitees.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:
        'private-db-mysql-nyc3-15962-do-user-8796872-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'doadmin',
      password: 'lgu81sylka6q1zrh',
      database: 'tmcdb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CommentsModule,
    InviteesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//globroot credentials
//CREATE USER 'globroot'@'localhost' IDENTIFIED BY '3e#@63UUMGIuuJvKb9';



