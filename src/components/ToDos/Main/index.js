import React from 'react'

function Main({todos, setTodos}) {
  return (
    <section className='main'>
      	<input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={() => {
		}}>
			 Mark all as complete
		</label>
        <ul className="todo-list">
			{todos.map((todo, i) =>(
			  <li key={i} className={todo.completed ? "completed" : ""}>
				<div className="view">
					<input 
					  className="toggle" 
					  type="checkbox" 
					  checked={todo.completed}
					  onChange={() => {setTodos(
						todos.map((item) => {
							return item === todo
								? { ...item, completed: !item.completed }
								: item;
						})
					)}} 
					/>
					<label>{todo.todoName}</label>
					<button className="destroy" onClick={() => {
                setTodos(todos.filter((item) => item !== todo))
              }} ></button>
				</div>
			  </li>
			))}
		</ul>
     </section>
  )
}

export default Main
