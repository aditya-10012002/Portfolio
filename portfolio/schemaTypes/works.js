import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'projectLink', type: 'url' }),
    defineField({ name: 'codeLink', type: 'url' }),
    defineField({
      name: 'imgUrl',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
