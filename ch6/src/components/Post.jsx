import PropTypes from 'prop-types'

export function Post({ title, contents, author }) {
  return (
    <article
      className='
        flex flex-col
        border border-gray-300 
        gap-2 
        w-full min-h-[150px]
        p-2 rounded-2xl 
        mx-auto mt-6 
        bg-gradient-to-r from-cyan-50 to-cyan-100 
        shadow-md hover:shadow-lg
        transition-all duration-300
        hover:from-cyan-200 hover:to-cyan-300
    '
    >
      <h3 className='text-xl font-semibold text-gray-800 text-center'>
        {title}
      </h3>
      <div className='text-gray-700 text-sm leading-relaxed flex-1 border border-gray-200 p-1 rounded-2xl shadow-md min-h-[30px]'>
        {contents}
      </div>
      <div className='flex justify-end'>
        <em className='text-gray-500 text-sm text-center'>
          Written by{' '}
          <strong className='text-gray-700'>{author || 'Anonymous'}</strong>
        </em>
      </div>
    </article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}
