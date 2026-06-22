import React from 'react'

const Todo = ({todos}) => {
  return (
    <div>
        <ul>
            {todos.map((todo)=>
            {
                return(<li key={todo} className='p-2 m-2 border-black text-white flex justify-between'>
                    <span>
                    {todo}
                    </span>
                    <button className='border bg-red-500 text-white'>Remove</button>
                </li>)
            })}
        </ul>
    </div>
  )
}

export default Todo