import { CreateProjectDepartmentDto } from './dto/create-project_department.dto';
import { UpdateProjectDepartmentDto } from './dto/update-project_department.dto';
import { ProjectDepartment } from './entities/project_department.entity';
import { Repository } from 'typeorm';
export declare class ProjectDepartmentsService {
    private readonly projectDepartmentRepository;
    constructor(projectDepartmentRepository: Repository<ProjectDepartment>);
    create(createProjectDepartmentDto: CreateProjectDepartmentDto): Promise<ProjectDepartment>;
    findAll(): Promise<ProjectDepartment[]>;
    findOne(id: number): Promise<ProjectDepartment>;
    update(id: number, updateProjectDepartmentDto: UpdateProjectDepartmentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
