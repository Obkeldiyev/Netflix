import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    findAll(): Promise<Category[] | {
        status: number;
        success: boolean;
        message: any;
    }>;
    findOne(id: number): Promise<Category | {
        status: number;
        success: boolean;
        message: any;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
    remove(id: number): Promise<{
        status: number;
        success: boolean;
        message: any;
    }>;
}
