import { column, defineDb, defineTable, sql } from "astro:db";

const Comentario = defineTable({
  columns: {
    nombre: column.text(),
    asistir: column.boolean(),
    mensaje: column.text(),
    fecha: column.date({ default: sql`CURRENT_TIMESTAMP` }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comentario },
});
