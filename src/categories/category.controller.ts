import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./category.dto";

@Controller('categories')
export class CategoryController{
    constructor(private readonly categoryService: CategoryService){}
    @Get()
    async getProductCategory() {
        return this.categoryService.findAllCategories();
    }
    
    @Post()
    async addProductCategory(@Body() categoryDto: CategoryDto ) {
        return this.categoryService.createCategory(categoryDto);
    }
    
    @Get(':id')
    async getProductCategoryById(@Param('id') id: string) {
        return this.categoryService.findCategoryById(id);
    }
    
    @Put(':id')
    async updateProductCategoryById(@Body() categoryDto: CategoryDto, @Param('id') id: string) {
        return this.categoryService.updateCategory(categoryDto, id);
    }
    
    @Delete(':id')
    async deleteProductCategoryById(@Param('id') id: string) {
        return this.categoryService.deleteCategory(id);
    }
    @Get('parentCategory/:id')
    async findParentCategory(@Param('id') id: string) {
        return this.categoryService.findParentCategory(id);
    }
}