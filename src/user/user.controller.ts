import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async sayHelloWorld(): Promise<string> {
    return 'Hello world!';
  }
}
