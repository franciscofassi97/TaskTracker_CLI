import { Task } from "../entities/index";

export type IUpdateTask = Partial<Pick<Task, "description" | "status" >>;