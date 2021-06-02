import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Injectable()
export class AdminGuard {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const isAdmin = await this.authService.checkIfAdmin({
      userId: user.id,
      accountId: user.account.id,
    });

    if (!isAdmin) {
      return false;
    }

    return true;
  }
}
