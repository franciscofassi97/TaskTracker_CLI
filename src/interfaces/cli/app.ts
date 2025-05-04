import { ListTaskUseCase } from "../../application/use-cases/index";
import { JsonTaskRepository } from "../../infrastructure/persistence/index";
import { ListTaskCommand } from "./commands/index";

export class CliApp {
    private commands: Record<string, any> = {};
  
    constructor() {
      const taskRepository = new JsonTaskRepository();
      const listTasksUseCase = new ListTaskUseCase(taskRepository);
      
      this.commands = {
        list: new ListTaskCommand(listTasksUseCase),
      };
    }
  
    public async run(): Promise<void> {
      const [,, command, ...args] = process.argv;
  
      if (!command) {
        console.log("Usage: task-cli <command> [args]");
        console.log("Available commands: list, add, etc.");
        return;
      }
  
      if (this.commands[command]) {
        await this.commands[command].execute(...args);
      } else {
        console.error(`Error: Command "${command}" not found.`);
      }
    }
  }