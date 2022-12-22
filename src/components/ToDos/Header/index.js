import {useState} from 'react'

function Header() {
  const [form, setForm] = useState();
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <div className="header">
      <h1>todos</h1>
      <form>
			  <input className="new-todo" onChange={onChangeInput} placeholder="What needs to be done?" autoFocus />
		  </form>
    </div> 
  )
}

export default Header
