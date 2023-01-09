import {useState} from 'react'

const emptyInput = { todoName: "", completed: false}

function Header({addTodo}) {
  const [todo, setTodo] = useState(emptyInput);

  const onChangeInput = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value})
  }
  
  const onSubmit = (e) => {
    e.preventDefault(); //varsayılan sayfa yenilemeyi durdurur.
    if(todo.todoName === ""){
      return false
    }
    addTodo((prevState) => [...prevState, todo])
    console.log(todo)
    setTodo(emptyInput)
  }

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
			  <input name='todoName' className="new-todo" value={todo.todoName} onChange={onChangeInput} placeholder="What needs to be done?" autoFocus />
		  </form>
    </div> 
  )
}

export default Header
