const GlobalNote = ({href}: {href?: string}) => {
  return (
    <div>
      <p>
        This module is a Global Component or pulls from a content List or external content. <br />
        No further action is required for this module to appear.
      </p>
      {href && (
        <p>
          To edit the contents of this module go to <a href={href}>this document</a>
        </p>
      )}
    </div>
  )
}

export default GlobalNote

/* Example Schema for how to use this with Note Plugin */
/* Make sure the file is .jsx or .tsx for this to work */
// {
//   title: 'Contact Form',
//   description: <GlobalNote />,
//   name: 'myCustomNote',
//   type: 'note',
//   initialValue: 'module',
//   options: {
//     icon: BulbOutlineIcon,
//     tone: 'caution',
//   },
// },
