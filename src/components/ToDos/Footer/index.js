import React from 'react'

function Footer({todos}) {
	const unCompleted = todos.filter((item) => item.completed === false);
	const Completed = todos.filter((item) => item.completed === true);
  return (
    <div className='footer'>
      <span className="todo-count">
			  <strong>{unCompleted.length}</strong>
			  items left
		  </span>

		  <ul className="filters">
			  <li>
				  <a href="#/" className="selected">All</a>
			  </li>
			  <li>
				  <a href="#/">Active</a>
			  </li>
			  <li>
				  <a href="#/">Completed</a>
			  </li>
		  </ul>

		  <button className="clear-completed">
		    Clear completed
		  </button>
    </div>
  
  )
}

export default Footer
