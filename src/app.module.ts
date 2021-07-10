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
import { TitheModule } from './tithe/tithe.module';
import { FellowshipModule } from './fellowship/fellowship.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
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
    TitheModule,
    FellowshipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// CREATE USER 'root'@'ec2-3-19-211-136.us-east-2.compute.amazonaws.com' IDENTIFIED BY '3e63UUMGIuuJvKb9';

// GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD, REPLICATION CLIENT on *.* TO 'root'@'ec2-3-19-211-136.us-east-2.compute.amazonaws.com' WITH GRANT OPTION;

// CREATE USER 'admin'@'localhost' IDENTIFIED BY '3e63UUMGIuuJvKb9';

//GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
