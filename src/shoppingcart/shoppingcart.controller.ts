import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ShoppingCartDto } from "./shoppingcart.dto";
import { ShoppingCartService } from "./shoppingcart.service";

@Controller('shoppingcart')
export class ShoppingCartController {
    constructor(
    private shoppingCartService: ShoppingCartService) {}  
    
    @Get()
    getAllShoppingCart() {
      return this.shoppingCartService.findAllShoppingCart();
    }
    @Get('userid/:id')
    getShoppingCartsByUserId(@Param('id') userId: string){
      return this.shoppingCartService.findShoppingCartsByUserId(userId);
    }
    @Delete('userid/:id')
    deleteAllShoppingCartsByUserId(@Param('id') userId: string){
      return this.shoppingCartService.deleteAllShoppingCartsByUserId(userId);
    }
    @Get(':id')
    getShoppingCartById(@Param('id') id: string) {
      return this.shoppingCartService.findShoppingCartById(id);
    }
  
    @Post()
    createShoppingCart(@Body() shoppingCartDto: ShoppingCartDto) {
      
      return this.shoppingCartService.createShoppingCart(shoppingCartDto);
    }
  
    @Put(':id')
    updateShoppingCart(@Param('id') id: string, @Body() shoppingCartDto: ShoppingCartDto) {
      return this.shoppingCartService.updateShoppingCart(shoppingCartDto, id);
    }
  
    @Delete(':id')
    deleteShoppingCart(@Param('id') id: string) {
      return this.shoppingCartService.deleteShoppingCart(id);
    }
}