import React from 'react'

export const metadata = {
  title: 'Blog - MyApp',
  description: 'Read our latest blog posts.',
};
const Blog = async() => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await posts.json()
    console.log(data)
  return (
    <div className="mt-8 mx-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((post: {id: number, title: string}) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <a href={`/Blog/${post.id}`}>{post.title}</a>
            </div>
        ))}
    </div>
  )
}

export default Blog