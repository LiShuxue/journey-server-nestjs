import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongodbService } from 'src/mongodb/mongodb.service';

@Module({
  controllers: [UserController], // 通过@Module 装饰器将元数据附加到模块类中， Nest 可以轻松反射（reflect）出哪些控制器（controller）必须被安装
  providers: [UserService, MongodbService],
})
export class UserModule {}
