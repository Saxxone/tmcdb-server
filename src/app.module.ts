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
      host: 'localhost',
      // host: 'database-2.cg3cfi29nmy8.us-east-2.rds.amazonaws.com', //for aws
      port: 3306,
      username: 'root', //for localhost
      // username: 'admin', // for aws
      // password: '3e63UUMGIuuJvKb9',
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
//PROMPT> mysql -h database-2.cg3cfi29nmy8.us-east-2.rds.amazonaws.com -P 3306 -u admin -p 3e63UUMGIuuJvKb9
//globroot credentials for DO
//CREATE USER 'globroot'@'localhost' IDENTIFIED BY '3e#@63UUMGIuuJvKb9';
