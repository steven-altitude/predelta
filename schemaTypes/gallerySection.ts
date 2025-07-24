import { defineType, defineField } from "sanity"

export const gallerySectionSchema = defineType({
  name: "gallerySection",
  title: "Sección Galería",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "images",
      title: "Imágenes",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Imagen",
          type: "reference",
          to: [{ type: "galleryImage" }],
        }),
      ],
    }),
    defineField({
      name: "viewMoreButton",
      title: "Botón Ver Más",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Texto",
          type: "string",
        }),
        defineField({
          name: "link",
          title: "Enlace",
          type: "string",
        }),
      ],
    }),
  ],
})
