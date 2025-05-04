import { Task } from "../../domain/entities/index";
import { ITaskRepository } from "../../domain/repositories/index";
import path from "node:path";
import fs from "fs/promises"

export class JsonTaskRepository implements ITaskRepository{
    private readonly filePath = path.join(__dirname, '../../../task.json'); 
    
    async findAll(filter?: string): Promise<Task[]> {
        try {
            console.log(this.filePath);
            await fs.access(this.filePath);
            const data =  await fs.readFile(this.filePath, 'utf-8');
            const dataArray: Task[] =  JSON.parse(data);
            if(filter != undefined && filter != ""){
                const dataFilter: Task[]  = dataArray.filter(x => x.status === filter);
                return dataFilter as Task[]
            }

            return dataArray as Task[];
        } catch (error: any) {
                  // 3. Si el archivo no existe, crearlo con un array vacío
            if (error.code === 'ENOENT') {
                await fs.writeFile(this.filePath, '[]', 'utf-8');
                return [];
            }
            throw new Error(`Failed to read tasks file: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    
}