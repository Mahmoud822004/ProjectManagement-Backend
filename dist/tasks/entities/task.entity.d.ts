import { Department } from 'src/departments/entities/department.entity';
import { Story } from 'src/story/entities/story.entity';
export declare enum Priority {
    low = "low",
    medium = "medium",
    high = "high"
}
export declare class Task {
    id: number;
    department_id: Department;
    userStory_id: Story;
    story_point: number;
    working_hours: number;
    priority: Priority;
    description: string;
    title: string;
    comment: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
