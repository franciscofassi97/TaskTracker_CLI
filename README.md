## (English):

# TaskTracker_CLI

> This project follows the [roadmap.sh Task Tracker Project Roadmap](https://roadmap.sh/projects/task-tracker).

# Project Structure (Clean Architecture)

This project follows the principles of **Clean Architecture** to ensure:

- ✅ **Clear separation of concerns**.
- ✅ **Independence from frameworks and infrastructure**.
- ✅ **Ease of testing and maintenance**.

## Main Layers:

1. **`domain`**: Pure business logic (entities and rules).
2. **`application`**: Use cases and services.
3. **`infrastructure`**: Implementations of external concerns (database, file system, APIs, frameworks, etc.).
4. **`interfaces`**: Entry points (CLI, API, Web).

_See the README in each folder for more details._

# Getting Started

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/franciscofassi97/TaskTracker_CLI.git
   cd TaskTracker_CLI
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

You can use the CLI to manage your tasks. Here are some example commands:

```bash
# Adding a new task
npm run task-cli add "Buy groceries"

# Updating and deleting tasks
npm run task-cli update 1 "Buy groceries and cook dinner"
npm run task-cli delete 1

# Marking a task as in progress or done
npm run task-cli mark-in-progress 1
npm run task-cli mark-done 1

# Listing all tasks
npm run task-cli list

# Listing tasks by status
npm run task-cli list done
npm run task-cli list todo
npm run task-cli list in-progress
```

## (Español):

# TaskTracker_CLI

> This project follows the [roadmap.sh Task Tracker Project Roadmap](https://roadmap.sh/projects/task-tracker).

# Estructura del Proyecto (Clean Architecture)

Este proyecto sigue los principios de **Clean Architecture** para garantizar:

- ✅ **Separación clara de responsabilidades**.
- ✅ **Independencia del framework y la infraestructura**.
- ✅ **Facilidad para pruebas y mantenimiento**.

## Capas Principales:

1. **`domain`**: Lógica de negocio pura (entidades y reglas).
2. **`application`**: Casos de uso y servicios.
3. **`infrastructure`**: Implementaciones de dependencias externas (base de datos, sistema de archivos, APIs, frameworks, etc.).
4. **`interfaces`**: Puntos de entrada (CLI, API, Web).

_Ver README específico en cada carpeta para más detalles_.

# Comenzando

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/franciscofassi97/TaskTracker_CLI.git
   cd TaskTracker_CLI
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Puedes usar la CLI para gestionar tus tareas. Aquí tienes algunos comandos de ejemplo:

```bash
# Agregar una nueva tarea
npm run task-cli add "Comprar víveres"

# Actualizar y eliminar tareas
npm run task-cli update 1 "Comprar víveres y cocinar la cena"
npm run task-cli delete 1

# Marcar una tarea como en progreso o completada
npm run task-cli mark-in-progress 1
npm run task-cli mark-done 1

# Listar todas las tareas
npm run task-cli list

# Listar tareas por estado
npm run task-cli list done
npm run task-cli list todo
npm run task-cli list in-progress
```
