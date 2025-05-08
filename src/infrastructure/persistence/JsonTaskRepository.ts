import { Task } from "../../domain/entities/index";
import { ITaskRepository } from "../../domain/repositories/index";
import path from "node:path";
import fs from "fs/promises"

export class JsonTaskRepository implements ITaskRepository{
    private readonly filePath = path.join(__dirname, "../../../task.json"); 
    
    private readonly readingFile = async (): Promise<Task[]> => {
        try {
            await fs.access(this.filePath);
            const data = await fs.readFile(this.filePath, "utf-8");
            return JSON.parse(data) as Task[];
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(this.filePath,'[]', "utf-8")
                return [];
            }
            throw new Error(`Failed to read tasks file: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    private readonly writingFile = async (data: Task[]): Promise<void> =>{
        try {
            await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
        } catch (error: any) {
            throw new Error(`Failed to write tasks file: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    async findAll(filter?: string): Promise<Task[]> {
        try {
            const data : Task[] =  await this.readingFile();
            if(filter != undefined && filter != ""){
                const dataFilter: Task[]  = data.filter(x => x.status === filter);
                return dataFilter as Task[]
            }
            return data;
        } catch (error: any) {
                  // 3. Si el archivo no existe, crearlo con un array vacío
            if (error.code === 'ENOENT') {
                await fs.writeFile(this.filePath, '[]', "utf-8");
                return [];
            }
            throw new Error(`Failed to read tasks file: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    async createTask(description: string): Promise<number>{
        try {
            const data: Task[] = await this.readingFile();
            const newId = data.length > 0 ? Math.max(...data.map(task => task.id)) + 1 : 1; // Generating id based on length
            // const newTask = {...task, id: newId}; // Generating id based on length
            const newTask: Task ={
                id: newId,
                description: description,
                status: "pending",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
            data.push(newTask);

            await this.writingFile(data);
            return newTask.id;
        } catch (error: any) {
            throw new Error(`Failed to create task: ${error instanceof Error ? error.message : String(error)}`);
        }

    }


    
}