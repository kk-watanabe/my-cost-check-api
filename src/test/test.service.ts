import { Injectable } from '@nestjs/common';
import { Test } from './test.interface';

@Injectable()
export class TestService {
  private readonly test: Test[] = [
    { id: 'a', name: 'Alex' },
    { id: 'b', name: 'Bob' },
    { id: 'c', name: 'Cathy' },
  ];

  listTest(): Test[] {
    return this.test;
  }

  getTest(id: string): Test {
    return this.test.find((value) => value.id === id);
  }
}
