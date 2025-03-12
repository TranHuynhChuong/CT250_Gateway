import { Injectable } from "@nestjs/common";
import { RedisMessageBrokerService } from "src/redisMessageBroker/redisMessageBroker.service";
import { CategoryDto } from "./category.dto";


@Injectable() 
export class CategoryService {
     async findParentCategory(id: string) {
       return await this.redisMessageBrokerService.requestResponse('find_parent_category', {id});
    }
    async deleteCategory(id: string) {
        return await this.redisMessageBrokerService.requestResponse('delete_product_category', {id});
    }
    async updateCategory(category: CategoryDto, id: string) {
        return await this.redisMessageBrokerService.requestResponse('update_product_category', { category, id});
    }
    async findCategoryById(id: string) {
        return await this.redisMessageBrokerService.requestResponse('get_product_category_by_id', {id});
    }
    async createCategory(category: CategoryDto) {
        return await this.redisMessageBrokerService.requestResponse('add_product_category', category);
    }
    async findAllCategories() {
        return await this.redisMessageBrokerService.requestResponse('get_product_categories', {});
    }
    constructor(private readonly redisMessageBrokerService: RedisMessageBrokerService){}

}