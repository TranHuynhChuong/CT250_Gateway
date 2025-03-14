import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { userDto } from './user.dto';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.customerService.findUserById(id);
  }

  @Post()
  createUser(@Body() user: userDto) {
    return this.customerService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: userDto) {
    return this.customerService.updateUser(user, id);
  }
}
