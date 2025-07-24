import { defineType, defineField } from "sanity"

export const ctaSectionSchema = defineType({
  name: "ctaSection",
  title: "Sección Call to Action",
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
      rows: 3,
    }),
    defineField({
      name: "primaryButton",
      title: "Botón Principal",
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
    defineField({
      name: "secondaryButton",
      title: "Botón Secundario",
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
    defineField({
      name: "backgroundColor",
      title: "Color de Fondo",
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
  ],
})
