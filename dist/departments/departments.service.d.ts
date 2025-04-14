import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
export declare class DepartmentsService {
    private readonly departmentsRepository;
    constructor(departmentsRepository: Repository<Department>);
    create(createDepartmentDto: CreateDepartmentDto, user: any): Promise<{
        department: string;
    } & Department>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto, user: any): Promise<Department>;
    remove(id: number, user: any): Promise<void>;
}
