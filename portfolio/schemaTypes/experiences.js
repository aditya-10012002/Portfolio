import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'experiences',
  title: 'Experiences (By Year)',
  type: 'document',
  fields: [
    defineField({ name: 'year', type: 'number' }),
    defineField({
      name: 'works',
      type: 'array',
      of: [{ type: 'workExperience' }],
    }),
  ],
})
