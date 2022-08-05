import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: " Casa", value: "casa" },
  { key: "oficina", text: "Oficina", value: "oficina" },
  { key: "otra", text: "Otra", value: "otra" },
];

export default function InputTask(props) {
  //el siguiente useState va a tener un objeto con todos los atributos que necesitare para manejar mis tareas
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });
  //dentro del formulario asigno todos los valores que recolectare para actualizar mi estado

  const [error, setError] = useState(false);
//aca estamos haciendo un destructuring, todo lo que tiene props lo estoy dividiendo
  const {createTask} = props;

//recuperando datos del input
  const onChangeTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };


//recuperando datos del selector
  const onChangeCategoryTask = (e, data) => {
    setTask({...task, [data.name]: data.value });
  };
  
 //creando la funcion para el submit
 const onSubmitTask = (e) => {

   // que no recarge la pagina
    e.preventDefault();

   //validacion
    if(task.taskName.trim() === "" ){
      setError(true);
      return;
    }

   //eliminar el mensaje previo 
   setError(false);

   //asignar un ID
    task.idTask= uuidv4();

   //crear la tarea 
    createTask(task);

   //limpiar los inputs
    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    })

 } 


  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu tarea..."
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="Categoria"
            value={task.categoryTask}
            onChange={onChangeCategoryTask}
          />
          <Button type="submit" color="teal" onClick={onSubmitTask}>
            Añadir tarea
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
}
