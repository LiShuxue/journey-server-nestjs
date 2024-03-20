import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { MyLoggerService } from 'src/logger/logger.service';

// 守卫在中间件之后执行，或在任何拦截器或管道之前执行。一般用来做鉴权，来确定请求是否可以继续。
// 守卫也是一个使用 @Injectable() 装饰器的类。守卫必须实现一个 canActivate() 函数，此函数应该返回一个布尔值，用于指示是否允许当前请求。
// 守卫也是可以控制使用范围的，方法范围 @UseGuards() 或全局范围 app.useGlobalGuards。
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly myLogger: MyLoggerService) {
    this.myLogger.setContext('AuthGuard');
  }

  canActivate(context: ExecutionContext): boolean {
    this.myLogger.log('AuthGuard');
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

const validateRequest = (req) => {
  return true;
};