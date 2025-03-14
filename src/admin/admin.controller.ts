import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDto } from "./admin.dto";

@Controller('admin') 
export class AdminController{
        constructor(private readonly adminService : AdminService){}
        @Get(':id')
        getBookStoreById(@Param('id') id: string) {
            return this.adminService.findBookStoreById(id);
        }
        @Post()
        createBookStore(@Body() admin: AdminDto) {
            return this.adminService.createBookStore(admin);
        }
        
        @Put(':id')
        updateBookStore(@Param('id') id: string, @Body() admin: AdminDto) {
            return this.adminService.updateBookStore( admin, id);
        }
        
        @Delete(':id')
        deleteBookStore(@Param('id') id: string) {
            return this.adminService.deleteBookStore(id);
        }

        

}