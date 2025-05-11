import { create } from "domain";
import { ListTaskUseCase } from "../../application/use-cases/index";
import { JsonTaskRepository } from "../../infrastructure/persistence/index";
import { CreateTaskCommand } from "./commands/CreateTaskCommand";
import { ListTaskCommand } from "./commands/index";
import { CreateTaskUseCase } from "../../application/use-cases/CreateTaskUseCase";
import { DeleteTaskUseCase } from "../../application/use-cases/DeleteTaskUseCase";
import { DeleteTaskCommand } from "./commands/DeleteTaskCommand";
import { UpdateTaskUseCase } from "../../application/use-cases/UpdateTaskUseCase";
import { UpdateTaskCommand } from "./commands/UpdateTaskCommand";

export class CliApp {
    private commands: Record<string, any> = {};
  
    constructor() {
      const taskRepository = new JsonTaskRepository();
      const listTasksUseCase = new ListTaskUseCase(taskRepository);
      const createTaskUseCase = new CreateTaskUseCase(taskRepository);
      const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
      const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);

      this.commands = {
        list: new ListTaskCommand(listTasksUseCase),
        add: new CreateTaskCommand(createTaskUseCase, process.argv[3]),
        delete: new DeleteTaskCommand(deleteTaskUseCase, process.argv[3]),
        update: new UpdateTaskCommand(updateTaskUseCase, process.argv[3], process.argv[4]),
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