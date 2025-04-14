import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<{
        name: string;
        start_date: Date;
        end_date: Date;
        client_id: number;
    } & import("./entities/project.entity").Project>;
    findAll(): Promise<import("./entities/project.entity").Project[]>;
    findOne(id: string, request: any): Promise<import("./entities/project.entity").Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<string>;
}
