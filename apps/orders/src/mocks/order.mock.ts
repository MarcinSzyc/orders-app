import { Order } from '../schemas/order.schema';

export const getOrderMock = (): Order => {
  return {
    id: 'testId',
    date: 'testDate',
    customer: {
      id: 'testCusomerId',
      name: 'testName',
    },
    items: [
      {
        product: {
          id: 'productId1',
          name: 'productName1',
          price: 12,
        },
        quantity: 12,
      },
      {
        product: {
          id: 'productId2',
          name: 'productName2',
          price: 122,
        },
        quantity: 123,
      },
    ],
  };
};
