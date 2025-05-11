
import { ChangeStatusUseCase } from "../../../application/use-cases/ChangeStatusUseCase";
import { TaskStatus } from "../../../domain/entities/TaskStatus";


export class ChangeStatusCommand {
    public id: string;
    public status: TaskStatus;

    constructor(private useCase: ChangeStatusUseCase, id: string, status: TaskStatus){
        this.id = id;
        this.status = status;
    }

    async execute(): Promise<void>{
        try {
            if (!this.id) throw new Error("Task id is required.");
            if (!this.status) throw new Error("Task status is required.");
            if(isNaN(Number(this.id))) throw new Error("Task id must be a number.");

            const idNumber : number = Number(this.id);
            const idTask: number = await this.useCase.execute(idNumber, this.status);
            console.log(`Task status updated successfully: ${idTask}`);
        } catch (error) {
            console.error('Error updating task status:', error instanceof Error ? error.message : error);
        }
    }
}