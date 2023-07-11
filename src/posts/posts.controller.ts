import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('test1')
  echoTest(): string {
    return 'test posts';
  }
}
