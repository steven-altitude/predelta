import { defineType, defineField } from "sanity"

export const galleryImageSchema = defineType({
  name: "galleryImage",
  title: "Imagen de Galería",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Texto Alternativo",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Inicial I", value: "inicial-1" },
          { title: "Inicial II", value: "inicial-2" },
          { title: "Primero de Básica", value: "primero-basica" },
          { title: "Actividades Especiales", value: "actividades" },
          { title: "Instalaciones", value: "instalaciones" },
          { title: "Eventos", value: "eventos" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "date",
      title: "Fecha",
      type: "date",
    }),
    defineField({
      name: "isActive",
      title: "Activo",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Fecha (más reciente)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Orden",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
})
