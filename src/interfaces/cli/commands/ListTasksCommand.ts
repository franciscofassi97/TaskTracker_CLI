import { ListTaskUseCase } from "../../../application/use-cases/index";
// import { Task } from "@domain/entities";

export class ListTaskCommand {
    constructor(private useCase: ListTaskUseCase){}

    async execute(filter?: string): Promise<void> {
        try {
            const tasks =  await this.useCase.exucte()
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