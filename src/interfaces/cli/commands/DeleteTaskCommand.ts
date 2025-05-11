import { DeleteTaskUseCase } from "../../../application/use-cases/DeleteTaskUseCase";

export class DeleteTaskCommand {
    public id: string;

    constructor(private useCase: DeleteTaskUseCase, id: string){
        this.id = id;
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
            const id = await this.useCase.execute(idNumber);
            console.log("Task deleted successfully:", id);
            
        } catch (error) {
            console.error('Error deleting task:', error instanceof Error ? error.message : error);
        }
    }
   
}