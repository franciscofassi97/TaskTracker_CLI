# Capa de Dominio

## Propósito

Contiene la **lógica de negocio central** de la aplicación:

- **Entidades**: Modelos de datos (ej: `Task`).
- **Repositorios**: Contratos (interfaces) para acceder a datos.

## Reglas:

- 🚫 **Nunca depende** de otras capas (application, infrastructure).
- 🚫 **Sin código técnico** (ej: conexiones a BD, APIs)..
