import { Task } from "../entities/index";
import { IUpdateTask } from "./IUpdateTask";

export interface ITaskRepository {
    findAll(filter?: string):Promise<Task[]>;
    createTask(description: string):Promise<number>;
    deleteTask(id: number):Promise<number>;
    updateTask(id: number, task: IUpdateTask):Promise<number>;
}
