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

```

```
