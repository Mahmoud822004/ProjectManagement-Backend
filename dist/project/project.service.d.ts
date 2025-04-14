import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { ProjectUser } from 'src/project_user/entities/project_user.entity';
export declare class ProjectService {
    private readonly projectRepository;
    private readonly projectUserRepository;
    constructor(projectRepository: Repository<Project>, projectUserRepository: Repository<ProjectUser>);
    create(createProjectDto: CreateProjectDto): Promise<{
        name: string;
        start_date: Date;
        end_date: Date;
        client_id: number;
    } & Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number, request: any): Promise<Project>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<string>;
}
