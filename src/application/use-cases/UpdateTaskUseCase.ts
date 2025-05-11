import { Task } from "../../domain/entities";
import { ITaskRepository } from "../../domain/repositories";


export class UpdateTaskUseCase {
    constructor(private taskRepository: ITaskRepository){};

    async execute(id: number, description: string): Promise<number>{
        if (!id || id <= 0 || !description) {
            throw new Error("Task description and id are required.");
        }
        return this.taskRepository.updateTask(id, description);
    }
}