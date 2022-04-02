import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='my-3'>
      <h4 >{todo.title}</h4>
      <p>{todo.des}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
