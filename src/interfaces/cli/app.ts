import { create } from "domain";
import { ListTaskUseCase } from "../../application/use-cases/index";
import { JsonTaskRepository } from "../../infrastructure/persistence/index";
import { CreateTaskCommand } from "./commands/CreateTaskCommand";
import { ListTaskCommand } from "./commands/index";
import { CreateTaskUseCase } from "../../application/use-cases/CreateTaskUseCase";

export class CliApp {
    private commands: Record<string, any> = {};
  
    constructor() {
      const taskRepository = new JsonTaskRepository();
      const listTasksUseCase = new ListTaskUseCase(taskRepository);
      const createTaskUseCase = new CreateTaskUseCase(taskRepository);

      this.commands = {
        list: new ListTaskCommand(listTasksUseCase),
        add: new CreateTaskCommand(createTaskUseCase, process.argv[3]),
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