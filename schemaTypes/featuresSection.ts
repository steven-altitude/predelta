import { defineType, defineField } from "sanity"

export const featuresSectionSchema = defineType({
  name: "featuresSection",
  title: "Sección Características",
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
              name: "icon",
              title: "Icono",
              type: "string",
              description: "Nombre del icono de Lucide React",
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
              rows: 3,
            }),
          ],
        }),
      ],
    }),
  ],
})
