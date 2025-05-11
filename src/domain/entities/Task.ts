import { TaskStatus } from "./TaskStatus";

export class Task{
    public readonly id: number;
    public description: string;
    public status: TaskStatus;
    readonly createdAt: Date;
    public updatedAt: Date;

    constructor(id: number, description: string, status: TaskStatus, createdAt:Date, updatedAt: Date){
        this.id = id;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}