import { CreateTaskUseCase } from "../../../application/use-cases/CreateTaskUseCase";

export class CreateTaskCommand {
    public description: string;

    constructor(private useCase: CreateTaskUseCase, description: string) {
        this.description = description;
    }

    async execute(): Promise<void> {
        try {
            const task = await this.useCase.exucute(this.description);
            console.log("Task created successfully:", task);
        } catch (error) {
            console.error('Error creating task:', error instanceof Error ? error.message : error);
        }
    }
}