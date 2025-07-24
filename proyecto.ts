import { defineType, defineField } from "sanity"

export const proyectoSchema = defineType({
  name: "proyecto",
  title: "Proyecto Especial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del Proyecto",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Descripción Corta",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "fullDescription",
      title: "Descripción Completa",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "icon",
      title: "Icono",
      type: "string",
      description: "Nombre del icono de Lucide React (ej: Globe, Palette, etc.)",
    }),
    defineField({
      name: "color",
      title: "Color Temático",
      type: "string",
      options: {
        list: [
          { title: "Verde", value: "green" },
          { title: "Morado", value: "purple" },
          { title: "Naranja", value: "orange" },
          { title: "Azul", value: "blue" },
          { title: "Amarillo", value: "yellow" },
          { title: "Rosa", value: "pink" },
          { title: "Teal", value: "teal" },
          { title: "Índigo", value: "indigo" },
        ],
      },
    }),
    defineField({
      name: "features",
      title: "Características",
      type: "array",
      of: [
        defineField({
          name: "feature",
          title: "Característica",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Título",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 2,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Galería de Imágenes",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Imagen",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
    }),
    defineField({
      name: "isActive",
      title: "Activo",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
})
