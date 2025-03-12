import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { CategoryModule } from './categories/category.module';
import { AddressModule } from './address/address.module';
import { AttributeModule } from './attributes/attribute.module';
import { ShippingInformationModule } from './shippingInformation/shipInfor.module';
import { ShoppingCartModule } from './shoppingcart/shoppingcart.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal:true}),
    CustomerModule,
    AdminModule,
    CategoryModule,
    AddressModule,
    AttributeModule,
    ShippingInformationModule,
    ShoppingCartModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}