import { useEffect, useState } from "react";
import Input from "./input";
import Card from "./card";
const Task =  () => {

    const initial_task=[];

  const [Task,setTask] = useState(initial_task);

  const addTaskHandler = async (newTask) => {
    let newTaskObj = {
        task_id : Math.random(),
        task_name : newTask
    };
    const response = await fetch("https://todo-backend-nmmo.onrender.com/create",{method: "POST",
      headers: {
        "content-Type" : "application/json"
      },
      body: JSON.stringify(newTaskObj),
    })
    if (response.status === 201){
        getTask();
        alert("New task added sucessfully");
    }
    else{
      alert("Failed to add task");
    }
    
  }

  const deleteTaskHandler = async (taskId) => {
    const response = await fetch("https://todo-backend-nmmo.onrender.com/" + taskId,{
      method:"DELETE"
    })
    if (response.status === 200){
      alert("Task Deleted");
      getTask();
    }
    else{
      alert("Fail to Delete Task ");
    }
  }
  //calling backend api
  const getTask = async () => {
    const response= await fetch("https://todo-backend-nmmo.onrender.com/");
    const taskList = await response.json();
    console.log(response);
    setTask(taskList);
  }
  //
  useEffect(() => {
    getTask();
  },[]);

    return(
        <div id="tasks">
           <Input onAddTask={addTaskHandler}/>
            {
              Task.map((task) => (
                <Card data={task} onDeleteTask={deleteTaskHandler}/>
              )
              )
            }
        </div>
    )
}
export default Task