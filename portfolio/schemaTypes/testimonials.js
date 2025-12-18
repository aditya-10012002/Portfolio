import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'company', type: 'string' }),
    defineField({ name: 'feedback', type: 'text' }),
    defineField({
      name: 'imageurl',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
