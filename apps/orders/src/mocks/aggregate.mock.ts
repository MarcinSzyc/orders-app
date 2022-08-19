import { Aggregate } from '../aggregate/schemas/aggregate.schema';

export const getAggregateMock = (): Aggregate => {
  return {
    id: 'testId',
    productName: 'testProductName',
    ordersCount: 12,
    cumulatedSales: 123,
  };
};
