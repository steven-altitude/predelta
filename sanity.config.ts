import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"

export default defineConfig({
  name: "predelta-website",
  title: "Predelta Website",

  projectId: 'wc3qeypc',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem().title("Páginas").child(S.documentTypeList("page").title("Páginas")),
            S.listItem().title("Niveles Educativos").child(S.documentTypeList("nivel").title("Niveles")),
            S.listItem().title("Proyectos Especiales").child(S.documentTypeList("proyecto").title("Proyectos")),
            S.listItem().title("Testimonios").child(S.documentTypeList("testimonial").title("Testimonios")),
            S.listItem().title("Galería").child(S.documentTypeList("galleryImage").title("Imágenes")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
