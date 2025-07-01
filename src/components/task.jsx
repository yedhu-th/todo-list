import { useState } from "react";
import Input from "./input";
import Card from "./card";
const Task =  () => {


    const initial_task=[
    {
      id : 10,
      text: "Task 1"
    },
    {
      id : 11,
      text : "Task 2"
    },
    {
      id : 12,
      text:"Task 3"
    }
  ];


  const [Task,setTask] = useState(initial_task);


  const addTaskHandler = (newTask) => {
    let newTaskObj = {
        id : Math.random(),
        text : newTask
    };
    setTask(prev => [
        ...prev,newTaskObj
    ]);
  }


  const deleteTaskHandler = (taskId) => {
    setTask(prev => prev.filter(item => item.id !== taskId));
  }
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
