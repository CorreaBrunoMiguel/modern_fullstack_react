import { PostList } from './components/PostList'
import { CreatePost } from './components/CreatePost'
import { PostFilter } from './components/PostFilter'
import { PostSorting } from './components/PostSorting'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { getPosts } from './api/posts.js'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const postQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })

  const posts = postQuery.data ?? []

  return (
    <div className='max-w-4xl mx-auto p-6 space-y-6'>
      {/* Seção criar posts */}
      <section className='p-4 rounded-2xl shadow-md bg-white border'>
        <h2 className='text-lg font-semibold mb-3 text-gray-700'>
          Create a new Post
        </h2>
        <CreatePost />
      </section>

      {/* Seção filtros e ordenação */}
      <section className='p-4 rounded-2xl shadow-md bg-white border flex flex-col gap-3'>
        <h2 className='text-lg font-semibold text-gray-700'>Filters</h2>
        <div className='flex flex-col sm:flex-row items-center gap-4'></div>
        <PostFilter
          field='Author'
          value={author}
          onChange={(value) => setAuthor(value)}
        />
        <PostSorting
          fields={['createdAt', 'updatedAt']}
          value={sortBy}
          onChange={(value) => setSortBy(value)}
          orderValue={sortOrder}
          onOrderValue={(orderValue) => setSortOrder(orderValue)}
        />
      </section>

      {/* Seção lista de posts */}
      <section>
        <h2 className='text-lg font-semibold mb-3 text-gray-700'>Posts</h2>
        <PostList posts={posts} />
      </section>
    </div>
  )
}
