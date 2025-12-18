import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Messages',
  type: 'document',
  readOnly: true,
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'message', type: 'text' }),
  ],
})
