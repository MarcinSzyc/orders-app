import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersRepository } from './orders.repository';
import { AggregateService } from './aggregate/aggregate.service';
import { ConfigModule } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';
import {
  Aggregate,
  AggregateDocument,
} from '../../aggregate/src/schemas/aggregate.schema';
import { AggregateRepository } from '../../aggregate/src/aggregate.repository';
import { getOrderMock } from './mocks/order.mock';
import { getAggregateMock } from './mocks/aggregate.mock';

describe('OrdersController', () => {
  let ordersController: OrdersController;
  let ordersRepository: OrdersRepository;
  let aggregateRepository: AggregateRepository;
  let mockOrdersModel: Model<OrderDocument>;
  let mockAggregateModel: Model<AggregateDocument>;
  let orderMock: Order;
  let aggregateMock: Aggregate;

  beforeEach(async () => {
    jest.resetAllMocks();

    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      controllers: [OrdersController],
      providers: [
        {
          provide: getModelToken(Order.name),
          useValue: Model,
        },
        {
          provide: getModelToken(Aggregate.name),
          useValue: Model,
        },
        OrdersService,
        OrdersRepository,
      ],
    }).compile();

    ordersController = app.get<OrdersController>(OrdersController);
    ordersRepository = app.get<OrdersRepository>(OrdersRepository);
    mockOrdersModel = app.get<Model<OrderDocument>>(getModelToken(Order.name));
  });

  it('should be defined', () => {
    expect(ordersController).toBeDefined();
  });

  describe('/orders', () => {
    beforeEach(() => {
      orderMock = getOrderMock();
      aggregateMock = getAggregateMock();
    });
    it('should provide orders list', async () => {
      const findOrders = jest
        .spyOn(mockOrdersModel, 'find')
        .mockResolvedValueOnce([orderMock]);

      const result = await ordersController.getOrders();

      expect(findOrders).toBeCalledTimes(1);
      expect(result).toEqual([orderMock]);
    });

    it('should create order', async () => {
      const createOrder = jest
        .spyOn(ordersRepository, 'create')
        .mockResolvedValueOnce(orderMock);

      const result = await ordersController.createOrder(orderMock);

      expect(createOrder).toBeCalledTimes(1);
      expect(result).toEqual(orderMock);
    });
  });
});
