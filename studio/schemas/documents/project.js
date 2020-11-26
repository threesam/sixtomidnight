import { format } from 'date-fns'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'updated',
      type: 'datetime',
      title: 'Updated'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [
        {
          type: 'contributorReference'
        }
      ]
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'website',
      type: 'externalLink',
      title: 'Website'
    },
    {
      name: 'repo',
      type: 'externalLink',
      title: 'Repo'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'relatedServices',
      type: 'array',
      title: 'Related Services',
      of: [
        {
          type: 'reference',
          to: {
            type: 'developmentService'
          }
        }
      ]
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [
        {
          type: 'reference',
          to: {
            type: 'technology'
          }
        }
      ]
    },
    {
      name: 'clientReference',
      title: 'Client',
      type: 'reference',
      to: [
        {
          type: 'client'
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'updatedAsc',
      title: 'Updated Date  new–>old',
      by: [
        {
          field: 'updated',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'updatedDesc',
      title: 'Updated Date  old->new',
      by: [
        {
          field: 'updated',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      updated: 'updated',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', updated, slug, media }) {
      const dateSegment = format(updated, 'YYYY/MM/DD')
      // const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        // subtitle: updated ? path : 'Missing publishing date'
        subtitle: updated ? `updated: ${dateSegment}` : 'This project has yet to be published'
      }
    }
  }
}
