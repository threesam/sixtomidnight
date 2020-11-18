export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'description',
      type: 'excerptPortableText',
      title: 'Description'
    },
    {
      name: 'projects',
      type: 'projectReference',
      title: 'Projects'
    }
  ]
}