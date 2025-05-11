#### **5. Interfaces Layer (`/src/interfaces/README.md`)**

# Interfaces Layer

## Purpose

Adapts the application to the **outside world**:

- **CLI**: Commands such as `list`, `add`.
- **REST/GraphQL API**: Controllers and routes (if present).
- **Web/UI**: Frontend components (optional).

## Rules:

- ✅ **Depends on `application`** (uses use cases).
- 🚫 **No business logic**.
- ✅ **Handles inputs/outputs** (e.g., parsing CLI arguments).

---

#### **5. Capa de Interfaces (`/src/interfaces/README.md`)**

# Capa de Interfaces

## Propósito

Adaptar la aplicación al **mundo exterior**:

- **CLI**: Comandos como `list`, `add`.
- **API REST/GraphQL**: Controladores y rutas (si hubiera).
- **Web/UI**: Componentes de frontend (opcional).

## Reglas:

- ✅ **Depende de `application`** (usa casos de uso).
- 🚫 **Sin lógica de negocio**.
- ✅ **Maneja inputs/outputs** (ej: parsear argumentos CLI).
