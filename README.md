# Sanity Boilerplate v1
*Improved version of the boil-studio*

Includes typscript, custom inputs, basic schematypes, and base structure for e-comm.
If you're looking for e-comm built out check out `boil-sanity-ecomm` in Github


 ## Be sure to edit and review the following files before starting:
 ### `constants.ts`
 - Make sure all constants are correct: API version, frontend url, shopify url, locked docs and page types
 ### `sanity.config.ts`
 - Project Id
 - Custom icon – `Logo.tsx`

 ### `.env`
 - change to .env if it's set as `.env.example`
 - Add in a preview secret [generate secret](https://randomkeygen.com/) – Be sure to add this to the frontend




## Developer Notes
### Custom Slug Input
`components/inputs/SlugInput.tsx`
Adapted from hdoro slug [plugin](https://github.com/hdoro/sanity-plugin-prefixed-slug) 

Plugin includes logic: `utils/usePrefixLogic.ts` and `utils/useSlugContext.ts` 

For frontend: can query for fullUrl and get the prefix along with the `slug.current`

### Global Note 
`components/inputs/GlobalNote.tsx`
Used for the pageBuilder to add in a _type that doesn't have user input i.e. frontend pulling from another source or cms 

```
{
  title: 'Contact Form',
  description: <GlobalNote />,
  name: 'myCustomNote',
  type: 'note',
  initialValue: 'module',
  options: {
    icon: BulbOutlineIcon,
    tone: 'caution',
  },
}
```
Can add in an optional href to the `<GlobalNote />` for a link to appear

**Schema file must be tsx or jsx for this to work**

### Plugins Folder
This is used for Shopify - no need to edit 

Creates custom Document Actions for Shopify and prevents `LOCKED_DOCUMENT_TYPES` from being deleted




