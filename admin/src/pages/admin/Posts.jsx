import React from 'react'
import PostsCard from '@/components/custom/PostsCard'
import data from '@/components/data.json'

const Posts = () => {
  return (
    <main className="p-6">
      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {data.map((post, index) => (
          <PostsCard key={index} title={post.title} desc={post.desc} />
        ))}
      </section>
    </main>
  )
}

export default Posts
