import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { MyLoggerService } from 'src/modules/logger/logger.service';
import { Types } from 'mongoose';

// 管道一般用于控制器的路由处理程序中，用于在数据传递给控制器之前对其进行验证、转换和处理。管道要么返回数据验证或者转换后的值，要么抛出一个错误。
// 管道也是具有 @Injectable() 装饰器的类。管道应实现 PipeTransform 接口，且实现 transform 方法。
// 管道一般用于对参数的验证，用在@Param，或者 @Query 中。metadata 参数是一个包含了有关参数的元数据的对象，其中包括以下属性：type：参数的类型（QUERY、BODY、PARAM 等）。metatype：参数的 JavaScript 类型。data：可选的自定义元数据。
// 当class-validator结合dto的验证不满足需求时，需要自己特殊的验证逻辑时，才需要自定义
@Injectable()
export class IdValidationPipe implements PipeTransform {
  constructor(private readonly myLogger: MyLoggerService) {
    this.myLogger.setContext('IdValidationPipe');
  }
  transform(value: any) {
    this.myLogger.log('IdValidationPipe: ' + value);

    // 在这里进行数据验证或转换
    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException('Invalid MongoDB ID');
    }

    // 返回经过验证和转换的值
    return value;
  }
}
