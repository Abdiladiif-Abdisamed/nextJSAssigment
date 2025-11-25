import React from 'react'

interface PageProps {
  params: {
    slug?: string[]
  }
}

const Page = ({ params }: PageProps) => {
  return (
    <div>Page {params.slug?.join('/')}</div>
  )
}

export default Page