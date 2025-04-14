import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';
import { Repository } from 'typeorm';
export declare class RateService {
    private readonly userRepository;
    constructor(userRepository: Repository<Rate>);
    create(createRateDto: CreateRateDto): Promise<CreateRateDto & Rate>;
    findAll(): Promise<Rate[]>;
    findOne(id: number): Promise<Rate>;
    update(id: number, updateRateDto: UpdateRateDto): Promise<Rate>;
    remove(id: number): Promise<void>;
}
