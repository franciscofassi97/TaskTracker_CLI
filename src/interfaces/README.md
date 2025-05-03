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
