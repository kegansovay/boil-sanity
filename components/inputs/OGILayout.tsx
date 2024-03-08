import React from 'react'
import {SanityDocument} from 'sanity'

interface LayoutProps {
  title: string
  description: string
}

const Component: React.FC<LayoutProps> = ({title, description}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      background: 'black',
      color: 'white',
      aspectRatio: '1200/630',
      padding: '40px',
    }}
  >
    <div>
      <h1>{title || 'Title'}</h1>
      {description && <h3>{description}</h3>}
    </div>
  </div>
)

const OGILayout = {
  name: 'OGILayout',
  title: 'OGI Layout',
  component: Component,
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
  ],
  prepare: (document: SanityDocument) => {
    return {
      title: document.title,
      description: document.description,
    }
  },
  dimensions: {
    width: 1200,
    height: 630,
  },
}

export default OGILayout
