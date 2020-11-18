export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
              'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edfdd0d4858740277f1dc6f',
                  title: 'Sanity Studio',
                  name: 'sixtomidnight-studio',
                  apiId: 'f4acbe95-1c75-4791-871e-8147a8813bbb'
                },
                {
                  buildHookId: '5edfdd0dfe49360264959c41',
                  title: 'Blog Website',
                  name: 'sixtomidnight',
                  apiId: '4897a6b5-2760-4066-8e79-725883f3f42b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salvatoredangelo/sixtomidnight',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sixtomidnight.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    },
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    }
  ]
}
