import {defineField} from 'sanity'

export default defineField({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  options: {
    insertMenu: {
      filter: 'auto',
      showIcons: true,
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/modules/${schemaTypeName}.jpg`,
        },
      ],
      groups: [{name: 'hero', of: ['hero']}],
    },
  },
  of: [
    {
      title: 'Reusable Section',
      type: 'reference',
      to: [{type: 'section'}],
      options: {category: 'Reusable Section'},
    },
    {type: 'link'},
  ],
})
