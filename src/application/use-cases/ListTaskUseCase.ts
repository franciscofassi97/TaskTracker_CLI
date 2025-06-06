import { ITaskRepository } from "../../domain/repositories/index";
import { Task } from "../../domain/entities/index";

export class ListTaskUseCase {
    constructor(private taskRepository: ITaskRepository){};

    async exucte(filter?: string): Promise<Task[]>{
        return this.taskRepository.findAll(filter);
    }
}

