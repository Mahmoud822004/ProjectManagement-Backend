import { ProjectDepartmentsService } from './project_departments.service';
import { CreateProjectDepartmentDto } from './dto/create-project_department.dto';
import { UpdateProjectDepartmentDto } from './dto/update-project_department.dto';
export declare class ProjectDepartmentsController {
    private readonly projectDepartmentsService;
    constructor(projectDepartmentsService: ProjectDepartmentsService);
    create(createProjectDepartmentDto: CreateProjectDepartmentDto): Promise<import("./entities/project_department.entity").ProjectDepartment>;
    findAll(): Promise<import("./entities/project_department.entity").ProjectDepartment[]>;
    findOne(id: string): Promise<import("./entities/project_department.entity").ProjectDepartment>;
    update(id: string, updateProjectDepartmentDto: UpdateProjectDepartmentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
