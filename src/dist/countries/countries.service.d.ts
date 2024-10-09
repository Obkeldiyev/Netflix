import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';
export declare class CountriesService {
    private readonly countriesRepository;
    constructor(countriesRepository: Repository<Country>);
    create(createCountryDto: CreateCountryDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    findAll(): Promise<Country[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: number): Promise<Country>;
    update(id: number, updateCountryDto: UpdateCountryDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
}
