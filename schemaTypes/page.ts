import { defineType, defineField } from "sanity"

export const pageSchema = defineType({
  name: "page",
  title: "Página",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Descripción",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "hero",
      title: "Sección Hero",
      type: "object",
      fields: [
        defineField({
          name: "badge",
          title: "Badge",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Título Principal",
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
      name: "sections",
      title: "Secciones",
      type: "array",
      of: [
        { type: "pilarsSection" },
        { type: "featuresSection" },
        { type: "testimonialsSection" },
        { type: "nivelesSection" },
        { type: "gallerySection" },
        { type: "ctaSection" },
      ],
    }),
  ],
})
