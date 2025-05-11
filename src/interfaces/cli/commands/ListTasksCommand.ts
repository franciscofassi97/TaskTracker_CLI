import { TaskStatus } from "../../../domain/entities/TaskStatus";
import { ListTaskUseCase } from "../../../application/use-cases/index";


export class ListTaskCommand {
    public filter?: string;
    
    constructor(private useCase: ListTaskUseCase, filter?: string) {
        this.filter = filter;
    }

    async execute(): Promise<void> {
        try {
            if(this.filter && this.filter === "todo"){
                this.filter = TaskStatus.PENDING;
            }
            const tasks =  await this.useCase.exucte(this.filter);
            if(tasks.length === 0){
                console.log("Task not found");
            }

            console.table(tasks.map(task =>({
                ID: task.id,
                Description: task.description,
                Status: task.status,
                Created: task.createdAt,
                Updated: task.updatedAt
            })))
        } catch (error) {
            console.error('Error listing tasks:', error instanceof Error ? error.message : error);
        }
    }
}