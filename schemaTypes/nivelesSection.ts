import { defineType, defineField } from "sanity"

export const nivelesSectionSchema = defineType({
  name: "nivelesSection",
  title: "Sección Niveles Educativos",
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
      name: "niveles",
      title: "Niveles",
      type: "array",
      of: [
        defineField({
          name: "nivel",
          title: "Nivel",
          type: "reference",
          to: [{ type: "nivel" }],
        }),
      ],
    }),
    defineField({
      name: "seamLearning",
      title: "Información SEAM Learning",
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
                  title: "Icono (emoji)",
                  type: "string",
                }),
                defineField({
                  name: "title",
                  title: "Título",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Descripción",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
