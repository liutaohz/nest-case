import { Controller, Get, Logger } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  private logger = new Logger();
  @Get('test1')
  echoTest(): string {
    this.logger.debug('aaa', Controller.name);
    this.logger.error('bbb', Controller.name);
    this.logger.log('ccc', Controller.name);
    this.logger.verbose('ddd', Controller.name);
    this.logger.warn('eee', Controller.name);
    return 'test posts';
  }
}
