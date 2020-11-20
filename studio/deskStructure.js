import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import { MdBeachAccess, MdStar, MdFace, MdFlag, MdCake, MdCasino, MdPages } from 'react-icons/lib/md'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'project', 'client', 'technology', 'developmentService', 'page', 'teamMember'].includes(listItem.getId())

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
        .title('Development Services')
        .schemaType('developmentService')
        .icon(MdCasino)
        .child(S.documentTypeList('developmentService').title('Development Services')),
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
        .title('Team')
        .icon(MdPerson)
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team')),
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
      S.listItem()
        .title('Pages')
        .icon(MdPages)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
