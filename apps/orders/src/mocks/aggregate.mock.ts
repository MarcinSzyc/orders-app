import { Aggregate } from '../../../aggregate/src/schemas/aggregate.schema';

export const getAggregateMock = (): Aggregate => {
  return {
    id: 'testId',
    productName: 'testProductName',
    ordersCount: 12,
    cumulatedSales: 123,
  };
};
