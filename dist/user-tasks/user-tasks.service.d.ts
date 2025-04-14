import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
export declare class UserTasksService {
    create(createUserTaskDto: CreateUserTaskDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserTaskDto: UpdateUserTaskDto): string;
    remove(id: number): string;
}
