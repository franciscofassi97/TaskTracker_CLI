#### **4. Infrastructure Layer (`/src/infrastructure/README.md`)**

# Infrastructure Layer

## Purpose

Implements technical details:

- **Persistence**: Databases, JSON files (`TaskRepository`).
- **External services**: APIs, third-party libraries.

## Rules:

- ✅ **Depends on `domain` and `application`** (implements their interfaces).
- ✅ **Technical code belongs here** (e.g., SQL, HTTP requests).
- 🚫 **No business logic**.

---

#### **4. Capa de Infraestructura (`/src/infrastructure/README.md`)**

# Capa de Infraestructura

## Propósito

Implementar detalles técnicos:

- **Persistencia**: Bases de datos, archivos JSON (`TaskRepository`).
- **Servicios externos**: APIs, bibliotecas de terceros.

## Reglas:

- ✅ **Depende de `domain` y `application`** (implementa sus interfaces).
- ✅ **Aquí sí va código técnico** (ej: SQL, HTTP requests).
- 🚫 **Sin lógica de negocio**.
