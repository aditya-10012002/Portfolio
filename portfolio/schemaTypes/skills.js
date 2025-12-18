import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({
      name: 'icon',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
