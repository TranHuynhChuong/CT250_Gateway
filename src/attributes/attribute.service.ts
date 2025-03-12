import { Injectable } from '@nestjs/common';
import { RedisMessageBrokerService } from 'src/redisMessageBroker/redisMessageBroker.service';
import { AttributeDto } from './attribute.dto';

@Injectable()
export class AttributeService {
  constructor(
    private readonly redisMessageBrokerService: RedisMessageBrokerService,
  ) {}

  async findAttributeAll() {
    return await this.redisMessageBrokerService.requestResponse('attribute_get_all', {});
  }
  async getByArrayObject(tTSPDto: any) {
    return await this.redisMessageBrokerService.requestResponse('attribute_get_by_array', {
      tTSPDto,
    });
  }
  async deleteAttribute(id: string) {
    return await this.redisMessageBrokerService.requestResponse('attribute_delete', { id });
  }
  async updateAttribute(attributeDto: AttributeDto, id: string) {
    return await this.redisMessageBrokerService.requestResponse('attribute_update', {
      attributeDto,
      id,
    });
  }
  async findAttributeById(id: string) {
    return await this.redisMessageBrokerService.requestResponse('attribute_get_by_id', {
      id,
    });
  }
  async createAttribute(attributeDto: AttributeDto) {
    return await this.redisMessageBrokerService.requestResponse('attribute_create',
      attributeDto);
  }
}
