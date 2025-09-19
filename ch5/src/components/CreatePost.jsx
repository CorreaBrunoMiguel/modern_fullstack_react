import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { createPost } from '../api/posts.js'

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [contents, setContents] = useState('')

  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: () => createPost({ title, author, contents }),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='
            flex flex-col gap-4
            w-fit max-w-md
            p-6 rounded-2xl
            mx-auto mt-6 bg-gradient-to-r from-cyan-50 to-cyan-100
            shadow-md hover:shadow-lg
            transition-all duration-300
            hover:from-cyan-100 hover:to-cyan-200
    '
    >
      <div className='flex flex-col gap-1'>
        <label htmlFor='create-title' className='font-medium text-gray-700'>
          Title:
        </label>
        <input
          type='text'
          name='create-title'
          id='create-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='
            border border-gray-400 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-400
            '
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='create-author' className=''>
          Author:
        </label>
        <input
          type='text'
          name='create-author'
          id='create-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='
            border border-gray-400 rounded-lg p-2 
            focus:outline-none focus:ring-2 focus:ring-cyan-400
          '
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='create-contents' className='font-medium text-gray-700'>
          Contents
        </label>
        <textarea
          name='create-contents'
          id='create-contents'
          rows='4'
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          className='
          border border-gray-400 rounded-lg p-2
          focus:outline-none focus:ring-2 focus:ring-cyan-400
          '
        ></textarea>
      </div>
      <input
        type='submit'
        value={createPostMutation.isPending ? 'Creating...' : 'Create'}
        disabled={!title || createPostMutation.isPending}
        className='
            cursor-pointer
            bg-cyan-500 text-white font-semibold
            px-4 py-2 rounded-lg
            shadow-md hover:shadow-lg
            hover:bg-cyan-600
            transition-all duration-300
        '
      />
    </form>
  )
}
