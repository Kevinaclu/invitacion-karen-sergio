import type { APIRoute } from "astro";
import { Comentario, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const nombre = data.get("nombre") as string;
  const asistir = data.get("asistir") as string;
  const mensaje = data.get("mensaje") as string;

  if (!nombre || !asistir) {
    return new Response("Faltan campos", { status: 400 });
  }

  const comment: typeof Comentario.$inferInsert = {
    nombre,
    asistir: asistir === "true",
    mensaje,
  };
  await db.insert(Comentario).values(comment);

  return new Response("Comentario guardado", { status: 201 });
};
