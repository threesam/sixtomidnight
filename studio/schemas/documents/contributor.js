export default {
  name: 'contributor',
  type: 'document',
  title: 'Contributor',
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
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    },
    {
      name: 'roleDescription',
      type: 'excerptPortableText',
      title: 'Role description'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    },
    {
      name: 'handles',
      type: 'handles',
      title: 'Handles'
    },
    {
      name: 'founder',
      type: 'boolean',
      title: 'Founder?'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
