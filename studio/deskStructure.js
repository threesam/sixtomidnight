import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import { MdBeachAccess, MdStar, MdFace, MdFlag, MdCake, MdCasino } from 'react-icons/lib/md'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'project', 'client', 'technology', 'service'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Services')
        .schemaType('service')
        .icon(MdCasino)
        .child(S.documentTypeList('service').title('Services')),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .icon(MdFlag)
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .icon(MdBeachAccess)
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Clients')
        .icon(MdFace)
        .schemaType('client')
        .child(S.documentTypeList('client').title('Clients')),
      S.listItem()
        .title('Categories')
        .icon(MdStar)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Tech')
        .icon(MdCake)
        .schemaType('technology')
        .child(S.documentTypeList('technology').title('Tech')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
