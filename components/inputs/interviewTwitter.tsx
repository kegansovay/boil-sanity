import React from 'react'


interface LayoutProps {
  title?: string
  quote?: string
  intervieweeName?: string
  intervieweePhoto?: any
}

const Component: React.FC<LayoutProps> = ({
  title,
  intervieweeName,
  intervieweePhoto,
  quote,
}) => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#3333ee',
      border: '2px solid green',
      color: '#fff',
    }}
  >
    <div>
      <div>Your company's logo</div>
      <h1>{title || 'Title'}</h1>
      {quote && <blockquote>{quote}</blockquote>}
      {intervieweeName && <p>{intervieweeName}</p>}
    </div>
  </div>
)

const interviewTwitter = {
  name: 'interviewTwitter',
  title: 'Interview (Twitter)',
  component: Component,
  prepare: (document:any) => {
    return {
      title: document.title || document.seoTitle,
      intervieweeName: document.author?.name,
      intervieweePhoto: document.author?.photo,
      quote: document.mainQuote,
    }
  },
  fields: [
    {
      title: 'Post title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Main quote',
      name: 'quote',
      type: 'text',
    },
    {
      title: 'Interviewee name',
      name: 'intervieweeName',
      type: 'string',
    },
    {
      title: 'Interviewee avatar',
      name: 'intervieweePhoto',
      type: 'image',
    },
  ],
  dimensions: {
    width: 1200,
    height: 630,
  },
}

export default interviewTwitter