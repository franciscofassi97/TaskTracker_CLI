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
import { ChangeStatusUseCase } from "../../application/use-cases/ChangeStatusUseCase";
import { ChangeStatusCommand } from "./commands/ChangeStatusCommand";
import { TaskStatus } from "../../domain/entities/TaskStatus";

export class CliApp {
    private commands: Record<string, any> = {};
    public markInProgress: string;
    public markDone: string;

    constructor() {
      const taskRepository = new JsonTaskRepository();
      const listTasksUseCase = new ListTaskUseCase(taskRepository);
      const createTaskUseCase = new CreateTaskUseCase(taskRepository);
      const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
      const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
      const changeStatusUseCase = new ChangeStatusUseCase(taskRepository);
      this.markInProgress = "mark-in-progress";
      this.markDone = "mark-done";

      this.commands = {
        list: new ListTaskCommand(listTasksUseCase, process.argv[3]),
        add: new CreateTaskCommand(createTaskUseCase, process.argv[3]),
        delete: new DeleteTaskCommand(deleteTaskUseCase, process.argv[3]),
        update: new UpdateTaskCommand(updateTaskUseCase, process.argv[3], process.argv[4]),
        [this.markInProgress] : new ChangeStatusCommand(changeStatusUseCase, process.argv[3], TaskStatus.IN_PROGRESS),
        [this.markDone] : new ChangeStatusCommand(changeStatusUseCase, process.argv[3], TaskStatus.DONE),
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