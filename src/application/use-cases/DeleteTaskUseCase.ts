import { ITaskRepository } from "../../domain/repositories";

export class DeleteTaskUseCase {
    constructor(private taskRepository: ITaskRepository){};

    async execute(id: number): Promise<number>{
        if (id <= 0){
            throw new Error("Task id is required.")
        };
        const idDeleted = await this.taskRepository.deleteTask(id);
        if (idDeleted <= 0){
            throw new Error("Task not found.")
        };
        return idDeleted;
    }
}
