import { UserTasksService } from './user-tasks.service';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
export declare class UserTasksController {
    private readonly userTasksService;
    constructor(userTasksService: UserTasksService);
    create(createUserTaskDto: CreateUserTaskDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserTaskDto: UpdateUserTaskDto): string;
    remove(id: string): string;
}
