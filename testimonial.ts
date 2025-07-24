import { defineType, defineField } from "sanity"

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonio",
  type: "document",
  fields: [
    defineField({
      name: "parentName",
      title: "Nombre del Padre/Madre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "studentName",
      title: "Nombre del Estudiante",
      type: "string",
    }),
    defineField({
      name: "relationship",
      title: "Parentesco",
      type: "string",
      options: {
        list: [
          { title: "Mamá", value: "Mamá" },
          { title: "Papá", value: "Papá" },
          { title: "Padres", value: "Padres" },
        ],
      },
    }),
    defineField({
      name: "testimonial",
      title: "Testimonio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Foto (opcional)",
      type: "image",
      options: {
        hotspot: true,
      },
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
      title: "Orden",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
})
