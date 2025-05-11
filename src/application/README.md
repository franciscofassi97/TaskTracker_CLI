#### **3. Application Layer (`/src/application/README.md`)**

# Application Layer

## Purpose

Orchestrate **use cases** and business rules:

- **Use Cases**: Actions such as `CreateTask`, `ListTasks`.
- **Services**: Shared logic between use cases.

## Rules:

- ✅ **Depends only on `domain`** (never on `infrastructure`).
- 🚫 **No technical details** (e.g., how data is persisted).
- ✅ **Dependency injection** (e.g., `ITaskRepository`).

---

#### **3. Capa de Aplicación (`/src/application/README.md`)**

# Capa de Aplicación

## Propósito

Orquestar los **casos de uso** y reglas de negocio:

- **Use Cases**: Acciones como `CreateTask`, `ListTasks`.
- **Services**: Lógica compartida entre use cases.

## Reglas:

- ✅ **Depende solo de `domain`** (nunca de `infrastructure`).
- 🚫 **Sin detalles técnicos** (ej: cómo se persisten los datos).
- ✅ **Inyección de dependencias** (ej: `ITaskRepository`).
