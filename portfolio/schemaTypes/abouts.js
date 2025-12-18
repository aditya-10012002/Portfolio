import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'abouts',
  title: 'About',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({
      name: 'imgUrl',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
