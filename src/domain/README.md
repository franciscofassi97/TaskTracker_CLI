# Domain Layer

## Purpose

Contains the **core business logic** of the application:

- **Entities**: Data models (e.g., `Task`).
- **Repositories**: Contracts (interfaces) for data access.

## Rules:

- 🚫 **Never depends** on other layers (application, infrastructure).
- 🚫 **No technical code** (e.g., database connections, APIs).

---

# Capa de Dominio

## Propósito

Contiene la **lógica de negocio central** de la aplicación:

- **Entidades**: Modelos de datos (ej: `Task`).
- **Repositorios**: Contratos (interfaces) para acceder a datos.

## Reglas:

- 🚫 **Nunca depende** de otras capas (application, infrastructure).
- 🚫 **Sin código técnico** (ej: conexiones a BD, APIs).
