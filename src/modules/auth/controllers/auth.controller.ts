import {
  Controller,
  Injectable,
  Post,
  Body,
  HttpException,
} from '@nestjs/common';

import { Public } from 'src/shared/decorators/public.decorator';

import { AuthenticateDTO } from '../dtos/auth/authenticate.dto';
import { AuthService } from '../services/auth.service';

@Injectable()
@Controller('/signin')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  async signin(@Body() { email, password, accountUrl }: AuthenticateDTO) {
    const userAuthenticated = await this.authService.authenticate({
      email,
      password,
      accountUrl,
    });

    if (!userAuthenticated) {
      throw new HttpException('Invalid credentials', 400);
    }

    return await this.authService.generateToken(userAuthenticated);
  }
}
