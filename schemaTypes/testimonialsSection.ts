import { defineType, defineField } from "sanity"

export const testimonialsSectionSchema = defineType({
  name: "testimonialsSection",
  title: "Sección Testimonios",
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
      name: "testimonials",
      title: "Testimonios",
      type: "array",
      of: [
        defineField({
          name: "testimonial",
          title: "Testimonio",
          type: "reference",
          to: [{ type: "testimonial" }],
        }),
      ],
    }),
  ],
})
