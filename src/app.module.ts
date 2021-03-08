import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './comments/comments.module';
import { InviteesModule } from './invitees/invitees.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './departments/departments.module';
import { FamiliesModule } from './families/families.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '3e63UUMGIuuJvKb9',
      database: 'tmcdb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CommentsModule,
    InviteesModule,
    AdminModule,
    AuthModule,
    DepartmentsModule,
    FamiliesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//PROMPT> mysql -h database-2.cg3cfi29nmy8.us-east-2.rds.amazonaws.com -P 3306 -u admin -p 3e63UUMGIuuJvKb9
// PROMPT> mysql -h database-2.cg3cfi29nmy8.us-east-2.rds.amazonaws.com -P 3306 -u admin -p 3e63UUMGIuuJvKb9
// DO credentials
// host: 'db-mysql-nyc3-15962-do-user-8796872-0.b.db.ondigitalocean.com',
//   port: 25060,
//   username: 'doadmin',
//   password: 'lgu81sylka6q1zrh',
// database: 'tmcdb',
