export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'getCode',
      title: 'GetCode',
      type: 'url',
    },
    {
      name: 'demo',
      title: 'Demo',
      type: 'url',
    },
  ],
}
