export default {
  name: 'contributorReference',
  type: 'object',
  title: 'Contributor reference',
  fields: [
    {
      name: 'contributor',
      type: 'reference',
      to: [
        {
          type: 'contributor'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'contributor.name',
      media: 'contributor.image.asset'
    }
  }
}
