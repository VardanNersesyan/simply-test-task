import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SignInRequestDto } from './dto/sign-in.request.dto';
import { SignUpRequestDto } from './dto/sign-up.request.dto';
import { RefreshAccessTokenRequestDto } from './dto/refresh-access-token.request.dto';
import { SignUpResponseDto } from './dto/sign-up.response.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RequestWithUser } from '../../common/interfaces/request-with-user';
import { SignInResponseDto } from './dto/sign-in.response.dto';
import { SignOutResponseDto } from './dto/sign-out.response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() signUp: SignUpRequestDto): Promise<SignUpResponseDto> {
    return this.authService.signUp(signUp);
  }

  @Post('sign-in')
  async signIn(@Body() signIn: SignInRequestDto): Promise<SignInResponseDto> {
    return await this.authService.signIn(signIn);
  }

  @Get('refresh-access-token')
  async refreshAccessToken(@Query() refresh: RefreshAccessTokenRequestDto) {
    return await this.authService.refreshAccessToken(refresh);
  }

  @UseGuards(AuthGuard)
  @Get('sign-out')
  async signOut(@Request() req: RequestWithUser): Promise<SignOutResponseDto> {
    return this.authService.signOut(req.user);
  }
}
