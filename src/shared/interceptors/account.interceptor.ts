import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { AccountService } from 'src/modules/auth/services/account.service';

@Injectable()
export class AccountInterceptor implements NestInterceptor {
  constructor(private readonly accountService: AccountService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const httpContext = context.switchToHttp();

    const req = httpContext.getRequest();

    const { account: accountUrl } = req.params;

    if (accountUrl) {
      const account = await this.accountService.findByAccountUrl(accountUrl);

      if (!account) {
        throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
      }

      req.account = account;
    }

    return next.handle();
  }
}
