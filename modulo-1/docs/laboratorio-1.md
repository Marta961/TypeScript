# Laboratorio 1 — Estadística y casos límite

## Funciones

- `calcularMedia`: devuelve `number | null` si el array está vacío.
- `calcularMediana`: idem.
- `filtrarAtipicos`: elimina valores fuera de `limite` veces la desviación típica muestral respecto a la media. Con σ = 0 no se elimina ningún valor para evitar vaciar el conjunto por error.

## Ejecución

Desde `modulo-1/`:

```bash
npx tsx src/index.ts
npx tsc
```

El JavaScript generado queda en `dist/`.
