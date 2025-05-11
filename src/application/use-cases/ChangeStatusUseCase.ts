import { ITaskRepository } from "../../domain/repositories/ITaskRepository";
import { IUpdateTask } from "../../domain/repositories/IUpdateTask";

export class ChangeStatusUseCase {
    constructor(private taskRepository: ITaskRepository){};

    async execute(id: number, status: string): Promise<number>{
        if (!id || id <= 0 || !status) {
            throw new Error("Task status and id are required.");
        }
        const taskToUpdate : IUpdateTask = {status: status};
        return this.taskRepository.updateTask(id, taskToUpdate);
    }
};
