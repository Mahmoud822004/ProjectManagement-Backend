import { CreateProjectUserDto } from './dto/create-project_user.dto';
import { UpdateProjectUserDto } from './dto/update-project_user.dto';
import { ProjectUser } from './entities/project_user.entity';
import { Repository } from 'typeorm';
import { Project } from 'src/project/entities/project.entity';
export declare class ProjectUserService {
    private readonly projectUserRepository;
    constructor(projectUserRepository: Repository<ProjectUser>);
    create(createProjectUserDto: CreateProjectUserDto): Promise<CreateProjectUserDto & ProjectUser>;
    findAll(project_id: Project): Promise<ProjectUser[]>;
    findOne(id: number): Promise<ProjectUser>;
    update(id: number, updateProjectUserDto: UpdateProjectUserDto): Promise<ProjectUser>;
    remove(id: number): Promise<void>;
}
