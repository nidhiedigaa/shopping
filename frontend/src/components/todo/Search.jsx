import React,{useState} from 'react'

const Search = () => {
    const [todo,setTodo]=useState([])
    const [task,setTask]=useState("")
    const handleAdd=()=>
    {
        if(task && !todo.includes(task.toLowerCase()))
        {
            setTodo([...todo,task])
            setTask("")
        }
        alert("task already exists or empty task can't be added")
    }
  return (
    <div className='mx-auto mt-10 flex flex-row gap-0'>
        <input placeholder='Enter the task' value={task} type="search" className='p-5 border-r-0 ' onChange={(e)=>setTask(e.target.value)}  />
        <button onClick={handleAdd} className='bg-black text-white p-5'>Add</button>
    </div>
  )
}

export default Search