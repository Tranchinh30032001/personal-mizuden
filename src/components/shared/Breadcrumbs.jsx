import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Breadcrumbs({ crumbs }) {
  /* Renders the current page as a plain text span (not a clickable link). */
  const createCurrentPage = (item) => {
    return <span>{item.title}</span>
  }

  /* Renders an ancestor page as a clickable link leading to its respective path. */
  const createAncestorPage = (item) => {
    return (
      <div className='text-blue-secondary'>
        <Link to={item.to} state={item.state}>
          <span className='underline'>{item.title}</span>
        </Link>
      </div>
    )
  }

  return (
    <div className='breadcrumbs text-sm hidden sm:block bg-gray-container pt-0 pb-2'>
      <ul>
        {crumbs.map((item, index) => (
          <li key={index}>
            {index === crumbs.length - 1 || !item.to
              ? createCurrentPage(item)
              : createAncestorPage(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs

Breadcrumbs.propTypes = {
  // `crumbs` must be an array of objects
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      // `to` is a required string representing the URL path
      to: PropTypes.string.isRequired,
      // `title` is a required string representing the breadcrumb label
      title: PropTypes.string.isRequired
    })
  ).isRequired // The `crumbs` prop itself is required
}
