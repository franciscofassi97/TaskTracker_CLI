import { Task } from "../entities/index";

export interface ITaskRepository {
    findAll():Promise<Task[]>;
}