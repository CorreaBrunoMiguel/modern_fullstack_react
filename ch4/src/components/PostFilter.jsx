import PropTypes from 'prop-types'

export function PostFilter({ field, value, onChange }) {
  return (
    <div
      className='
        flex flex-col gap-1
        w-fit max-w-xs
        p-4 rounded-xl
        bg-gradient-to-r from-cyan-50 to-cyan-100
        shadow-sm hover:shadow-md
        transition-all duration-300
        hover:from-cyan-100 hover:to-cyan-200
        '
    >
      <label htmlFor={`filter-${field}`} className='font-medium text-gray-700'>
        {field}
      </label>
      <input
        type='text'
        name={`filter-${field}`}
        id={`filter-${field}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='
            border border-gray-300 rounded-lg p-2
            focus:outline-none focus:ring-2 focus:ring-cyan-400    
        '
      />
    </div>
  )
}

PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
