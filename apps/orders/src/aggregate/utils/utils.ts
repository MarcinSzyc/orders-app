const getYesterdayISO = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday;
};

export const mostOftenBoughtProductsFromYesterdayQuerry = (): any => {
  return [
    {
      $match: {
        date: getYesterdayISO(),
      },
    },
    {
      $unwind: {
        path: '$items',
      },
    },
    {
      $group: {
        _id: '$items.product.id',
        product: {
          $first: '$items.product.name',
        },
        total_value: {
          $sum: { $multiply: ['$items.product.price', '$items.quantity'] },
        },
        ordersWithProduct: { $sum: 1 },
      },
    },
    {
      $sort: {
        total_value: -1,
      },
    },
    {
      $limit: 10,
    },
    {
      $set: {
        product_id: '$_id',
      },
    },
  ];
};
