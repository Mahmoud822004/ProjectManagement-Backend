import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto, req: any): Promise<{
        department: string;
    } & import("./entities/department.entity").Department>;
    findAll(): Promise<import("./entities/department.entity").Department[]>;
    findOne(id: string): Promise<import("./entities/department.entity").Department>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto, req: any): Promise<import("./entities/department.entity").Department>;
    remove(id: string, req: any): Promise<void>;
}
