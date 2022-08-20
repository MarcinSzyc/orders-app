import { Test, TestingModule } from '@nestjs/testing';
import { AggregateController } from './aggregate.controller';
import { AggregateService } from './aggregate.service';

describe('AggregateController', () => {
  let aggregateController: AggregateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AggregateController],
      providers: [AggregateService],
    }).compile();

    aggregateController = app.get<AggregateController>(AggregateController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(aggregateController.getHello()).toBe('Hello World!');
    });
  });
});
