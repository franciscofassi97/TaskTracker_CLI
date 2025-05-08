import { Task } from "../../domain/entities";
import { ITaskRepository } from "../../domain/repositories";

export class CreateTaskUseCase {
    constructor(private taskRepository: ITaskRepository){};
        
    async exucute(description?: string): Promise<number>{
        if (!description) {
            throw new Error("Task description is required.");
          }
        return this.taskRepository.createTask(description);
    };
};
