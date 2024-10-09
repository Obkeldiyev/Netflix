import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    create(createCountryDto: CreateCountryDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    findAll(): Promise<import("./entities/country.entity").Country[] | {
        success: boolean;
        status: number;
        message: any;
    }>;
    findOne(id: string): Promise<import("./entities/country.entity").Country>;
    update(id: string, updateCountryDto: UpdateCountryDto): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        status: number;
        message: any;
    }>;
}
