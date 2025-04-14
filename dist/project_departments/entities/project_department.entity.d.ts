import { Department } from 'src/departments/entities/department.entity';
import { Project } from 'src/project/entities/project.entity';
export declare class ProjectDepartment {
    id: number;
    department_id: Department;
    project_id: Project;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
