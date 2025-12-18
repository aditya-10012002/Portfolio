import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'Work Experience Item',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'company', type: 'string' }),
    defineField({ name: 'desc1', type: 'string' }),
    defineField({ name: 'desc2', type: 'string' }),
  ],
})
