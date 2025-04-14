import { ProjectUserService } from './project_user.service';
import { CreateProjectUserDto } from './dto/create-project_user.dto';
import { UpdateProjectUserDto } from './dto/update-project_user.dto';
import { Project } from 'src/project/entities/project.entity';
export declare class ProjectUserController {
    private readonly projectUserService;
    constructor(projectUserService: ProjectUserService);
    create(createProjectUserDto: CreateProjectUserDto): Promise<CreateProjectUserDto & import("./entities/project_user.entity").ProjectUser>;
    findAll(project_id: Project): Promise<import("./entities/project_user.entity").ProjectUser[]> | {
        message: string;
    };
    findOne(id: string): Promise<import("./entities/project_user.entity").ProjectUser>;
    update(id: string, updateProjectUserDto: UpdateProjectUserDto): Promise<import("./entities/project_user.entity").ProjectUser>;
    remove(id: string): Promise<void>;
}
