import { useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';

function App() {
   // pasar las tareas a localstorage
   let initialTasks = JSON.parse(localStorage.getItem("tasks"));

   if (!initialTasks) {
     initialTasks = [];
   }
 
   const [tasks, setTasks] = useState(initialTasks);
 
   //guardando las tasks en el localstorage
   useEffect(() => {
     if (initialTasks) {
      //actualizamos el value de "tasks" con lo wue tengo en tasks
       localStorage.setItem("tasks", JSON.stringify(tasks));
     } else {
       localStorage.setItem("tasks", JSON.stringify([]));
     }
   }, [initialTasks, tasks]);
 
   const createTask = (task) => {
     setTasks([...tasks, task]);
   };
 
   const deleteTask = (id) => {
    //aca lo que decimos es que nos filtre entre todas las tareas, nos quedamos con las que sean diferentes al id que seleccionamos
     const currentTask = tasks.filter((task) => task.idTask !== id);
     //aca las guardamos son el id seleccionado
     setTasks(currentTask);
     
   };
 
  console.log(tasks);

  return (
  <Container>
    <Header/>
    <InputTask createTask={createTask}/>
    <TaskContent tasks={tasks} deleteTask={deleteTask}/>
  </Container>
  );
}

export default App;
