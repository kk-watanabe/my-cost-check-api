import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from './test.interface';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  listUsers(): Test[] {
    return this.testService.listTest();
  }

  @Get(':id')
  getTest(@Param('id') id: string): Test {
    return this.testService.getTest(id);
  }
}
