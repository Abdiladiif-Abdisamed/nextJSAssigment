'use client'
import { useFormState } from 'react-dom'
import { createTodoAction } from '../actions/todoActions'
export default function TodoForm(){
 const [state, action] = useFormState(createTodoAction, {})
 return (
  <form action={action}>
   <input name='title' placeholder='Todo title'/>
   <select name='priority'>
    <option value='low'>Low</option>
    <option value='medium'>Medium</option>
    <option value='high'>High</option>
   </select>
   <button>Add</button>
   {state?.error && <p>{state.error}</p>}
   {state?.success && <p>Added</p>}
  </form>
 )
}