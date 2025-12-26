import React from 'react'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
  const data = await post.json()
    return {
        title: `${data.title} `,
        description: data.body,
        openGraph: {
            title: data.title,
            description: data.body,

        },
        twitter: {
            title: data.title,
            description: data.body,
    }
    

}
}
const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
  const data = await post.json()

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default BlogPost