import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response } from 'express';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res = context.switchToHttp().getResponse<Response>();
    return next.handle().pipe(
      map((data: object | any[]) => {
        return {
          message: res.statusCode >= 200 && res.statusCode < 300 ? 'Success' : 'Error',
          statusCode: res.statusCode,
          data,
        };
      }),
    );
  }
}
