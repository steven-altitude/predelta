import { defineType, defineField } from "sanity"

export const pilarsSectionSchema = defineType({
  name: "pilarsSection",
  title: "Sección Pilares",
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
      name: "pilars",
      title: "Pilares",
      type: "array",
      of: [
        defineField({
          name: "pilar",
          title: "Pilar",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icono (emoji)",
              type: "string",
            }),
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
              rows: 2,
            }),
            defineField({
              name: "features",
              title: "Características",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(4),
    }),
  ],
})
