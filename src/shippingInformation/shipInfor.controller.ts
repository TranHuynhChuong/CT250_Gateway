import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ShippingInformationDto } from './shipInfor.dto';
import { ShippingInformationService } from './shipInfor.service';

@Controller('shippingInformation')
export class ShippingInformationController {
  constructor(
    private readonly shippingInformationService: ShippingInformationService,
  ) {}
  @Get(':id')
  getShippingInformationById(@Param('id') id: string) {
    return this.shippingInformationService.findShipInforById(id);
  }
  @Post()
  createShippingInformation(
    @Body() ShippingInformation: ShippingInformationDto,
  ) {
    return this.shippingInformationService.createShipInfor(ShippingInformation);
  }

  @Put(':id')
  updateShippingInformation(
    @Param('id') id: string,
    @Body() ShippingInformation: ShippingInformationDto,
  ) {
    return this.shippingInformationService.updateShipInfor(ShippingInformation, id);
  }

  @Delete(':id')
  deleteShippingInformation(@Param('id') id: string) {
    return this.shippingInformationService.deleteShipInfor(id);
  }
}
