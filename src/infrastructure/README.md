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
