import { Injectable } from '@nestjs/common';
import { ShippingInformationDto } from './shipInfor.dto';
import { RedisMessageBrokerService } from 'src/redisMessageBroker/redisMessageBroker.service';

@Injectable()
export class ShippingInformationService {
  constructor(
    private readonly redisMessageBrokerService: RedisMessageBrokerService,
  ) {}

  deleteShipInfor(id: string) {
    this.redisMessageBrokerService.requestResponse(
      'delete_shipping_information',
      { id },
    );
  }
  updateShipInfor(ShippingInformation: ShippingInformationDto, id: string) {
    this.redisMessageBrokerService.requestResponse(
      'update_shipping_information',
      { ShippingInformation, id },
    );
  }
  findShipInforById(id: string) {
    this.redisMessageBrokerService.requestResponse('get_shipping_information', {
      id,
    });
  }
  createShipInfor(ShippingInformation: ShippingInformationDto) {
    this.redisMessageBrokerService.requestResponse(
      'create_shipping_information',
      { ShippingInformation },
    );
  }
}
