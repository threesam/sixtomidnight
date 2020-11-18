export default {
  name: 'client',
  type: 'document',
  title: 'Client',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email'
    }
  }
}