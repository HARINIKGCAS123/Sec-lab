import React,{useState} from "react"
function TodoList(){
    const [tasks,setTask]=useState([])
    const [text,setText]=useState("")
    const addTask=()=>{
        
    }
    return(
        <div>
            <h2>To-Do List</h2>
            <input
            value={text}
            placeholder="Enter Task"
            onChange={(e)=>setText(e.target.value)}
            />
            <button onclick={addTask}>ADD</button>
            <ul>
                {tasks.map((task,index)=>(
                    <li key={index}>
                        <input 
                        type="checkbox"
                        checked={tasks.completed}

                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}