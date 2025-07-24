import { pageSchema } from "./page"
import { pilarsSectionSchema } from "./pilarsSection"
import { featuresSectionSchema } from "./featuresSection"
import { testimonialsSectionSchema } from "./testimonialsSection"
import { nivelesSectionSchema } from "./nivelesSection"
import { gallerySectionSchema } from "./gallerySection"
import { ctaSectionSchema } from "./ctaSection"
import { nivelSchema } from "./nivel"
import { proyectoSchema } from "./proyecto"
import { testimonialSchema } from "./testimonial"
import { galleryImageSchema } from "./galleryImage"

export const schemaTypes = [
  // Documentos principales
  pageSchema,
  nivelSchema,
  proyectoSchema,
  testimonialSchema,
  galleryImageSchema,

  // Secciones para páginas
  pilarsSectionSchema,
  featuresSectionSchema,
  testimonialsSectionSchema,
  nivelesSectionSchema,
  gallerySectionSchema,
  ctaSectionSchema,
]
