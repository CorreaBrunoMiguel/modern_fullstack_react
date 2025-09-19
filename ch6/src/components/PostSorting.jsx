import PropTypes from 'prop-types'

export function PostSorting({
  fields = [],
  value,
  onChange,
  orderValue,
  onOrderValue,
}) {
  return (
    <div
      className='
        flex flex-col sm:flex-row sm:items-center gap-3
        w-fit max-w-md
        p-4 rounded-xl
        bg-gradient-to-r from-cyan-50 to-cyan-100
        shadow-sm hover:shadow-md
        transition-all duration-300
        hover:from-cyan-100 hover:to-cyan-200
        '
    >
      <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
        <label htmlFor='sortBy' className='font-medium text-gray-700'>
          Sort By:
        </label>
        <select
          name='sortBy'
          id='sortBy'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='
                border border-gray-300 rounded-lg p-2
                focus:outline-none focus:ring-2 focus:ring-cyan-400
        '
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
      </div>
      {'  /  '}
      <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
        <label htmlFor='sortOrder' className='font-medium text-gray-700'>
          Sort Order:
        </label>
        <select
          name='sortOrder'
          id='sortOrder'
          value={orderValue}
          onChange={(e) => onOrderValue(e.target.value)}
          className='
            border border-gray-300 rounded-lg p-2
            focus:outline-none focus:ring-2 focus:ring-cyan-400
            '
        >
          <option value={'ascending'} className=''>
            ascending
          </option>
          <option value={'descending'} className=''>
            descending
          </option>
        </select>
      </div>
    </div>
  )
}

PostSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderValue: PropTypes.string.isRequired,
  onOrderValue: PropTypes.func.isRequired,
}
