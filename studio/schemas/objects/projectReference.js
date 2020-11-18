export default {
  name: 'projectReference',
  type: 'object',
  title: 'Project reference',
  fields: [
    {
      name: 'project',
      type: 'reference',
      to: [
        {
          type: 'project'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'project.name'
    }
  }
}
