import { defineType, defineField } from "sanity"

export const nivelSchema = defineType({
  name: "nivel",
  title: "Nivel Educativo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del Nivel",
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
      name: "ageRange",
      title: "Rango de Edad",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "schedule",
      title: "Horario",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Características Principales",
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
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 3,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "activities",
      title: "Actividades Principales",
      type: "array",
      of: [{ type: "string" }],
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
      name: "color",
      title: "Color Temático",
      type: "string",
      options: {
        list: [
          { title: "Azul Pastel", value: "pastel-blue" },
          { title: "Rosa Suave", value: "soft-pink" },
          { title: "Celeste Claro", value: "light-sky" },
          { title: "Beige Claro", value: "light-beige" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      validation: (rule) => rule.required(),
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
