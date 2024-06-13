import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserRequestDto } from './dto/update-user.request.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RequestWithUser } from '../../common/interfaces/request-with-user';
import { UserListRequestDto } from './dto/user-list.request.dto';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() userListRequestDto: UserListRequestDto) {
    return this.userService.findAll(userListRequestDto);
  }

  @Get('profile')
  getProfile(@Request() req: RequestWithUser) {
    return this.userService.findOne(req.user.id);
  }

  @Patch('profile')
  updateProfile(
    @Request() req: RequestWithUser,
    @Body() updateUserDto: UpdateUserRequestDto,
  ) {
    return this.userService.updateProfile(req.user.id, updateUserDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
}
