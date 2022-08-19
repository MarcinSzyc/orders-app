import { Injectable, Logger } from '@nestjs/common';
import { AggregateRepository } from './aggregate.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../schemas/order.schema';
import { mostOftenBoughtProductsFromYesterdayQuerry } from './utils/utils';

@Injectable()
export class AggregateService {
  protected readonly logger: Logger;
  constructor(
    private readonly aggregateRepository: AggregateRepository,
    @InjectModel(Order.name)
    private readonly orderModel: Model<Order>,
  ) {}

  async createAggregateEntry(order) {
    const orderItems = order.items;
    const upsertedDocs = [];
    let document, existingAggregate, item;

    for (let i = 0; i < orderItems.length; i++) {
      item = orderItems[i];
      document = {
        id: item.product.id,
        productName: item.product.name,
      };

      try {
        existingAggregate = await this.aggregateRepository.findOne({
          id: item.product.id,
        });
      } catch (error) {
        Logger.log('Aggregate not found!');
      }

      if (!existingAggregate) {
        document = {
          ...document,
          ordersCount: 1,
          cumulatedSales: item.quantity * item.product.price,
        };

        await this.aggregateRepository.create(document);

        Logger.log('New Aggregate created!');

        continue;
      }

      document = {
        ...document,
        ordersCount: existingAggregate.ordersCount + 1,
        cumulatedSales:
          existingAggregate.cumulatedSales + item.quantity * item.product.price,
      };

      upsertedDocs.push(
        await this.aggregateRepository.upsert({ id: document.id }, document),
      );

      Logger.log('Aggregate updated!');
    }

    return upsertedDocs;
  }

  // Implement EP returning TOP 10 profitable products, based on their sales value
  // (quantity sales x product price). Keep in mind that pri
  async getMostProfitableProducts() {
    return await this.aggregateRepository.getMostProfitableProducts();
  }

  // Implement EP returning TOP 10 most often bought products (in terms of
  // order count, not quantity).
  async getMostOftenBoughtProducts() {
    return await this.aggregateRepository.getMostOftenBoughtProducts();
  }

  // Implement EP returning TOP 10 most often bought products (in terms of
  // order count, not quantity) from yesterday
  async getMostOftenBoughtProductsFromYesterday() {
    return this.orderModel.aggregate(
      mostOftenBoughtProductsFromYesterdayQuerry(),
    );
  }
}
