import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //  1. 固定路径： http://127.0.0.1:3000/app/list
  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }

  // 可以匹配到 post请求，http://127.0.0.1:3000/app/list
  @Post('list')
  create(): string {
    return 'create';
  }

  // 2.通配符路径(?+* 三种通配符 ) ,如 http://127.0.0.1:3000/app/user_123
  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  // 3.带参数路径
  // 可以匹配到put请求，http://127.0.0.1:3000/app/list/xxxx
  @Put('list/:id')
  update() {
    return 'update';
  }
}
