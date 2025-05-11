import { UpdateTaskUseCase } from "../../../application/use-cases/UpdateTaskUseCase";


export class UpdateTaskCommand {
    public id: string;
    public description: string;

    constructor(private useCase: UpdateTaskUseCase, id: string, description: string){
        this.id = id;
        this.description = description;
    }

    async execute(): Promise<void>{
        try {
            if (!this.id) {
                throw new Error("Task id is required.");
            }
            if(isNaN(Number(this.id))){
                throw new Error("Task id must be a number.");
            }
            const idNumber: number = Number(this.id);

            const idTask: number = await this.useCase.execute(idNumber, this.description);
            console.log(`Task updated successfully: ${idTask}`);
        } catch (error) {   
            console.error('Error updating task:', error instanceof Error ? error.message : error);
        }
    }
}
