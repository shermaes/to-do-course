import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import {useState} from 'react'
const options = [
    {key: "deporte", text:"Deporte", value: "deporte" },
    {key: "casa", text:" Casa", value: "casa" },
    {key: "oficina", text:"Oficina", value: "oficina" },
    {key: "otra", text:"Otra", value: "otra" },
]
export default function InputTask() {
    //el siguiente useState va a tener un objeto con todos los atributos que necesitare para manejar mis tareas
    const [task, setTask] = useState({
        idTask: "",
        taskName:"",
        categoryName:""
    })
    //dentro del formulario asigno todos los valores que recolectare para actualizar mi estado

    const [error, setError] = useState(false);

    const onChangeTask = (e) => {
     console.log(e.target.value);
     setTask({
       //lo que hacemos con los ... es que le decimos que lo que estamos recolectando lo vamos a mantener ahi hasta que terminemos
        ...task,
        // aca estamos actualizando taskname con el valo que recibimos
        [e.target.name]: e.target.value,
     });
    };
    return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu tarea..."
            iconPosition="left"
            name="taskname"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="Categoria"
            value={task.categoryName}
          />
          <Button type="submit" color="teal">Añadir tarea</Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form" >
            <Icon name="close"/>
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close"/>
            </Header> 
        </Grid>
      )}
    </>
  );
}
