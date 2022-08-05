import { Grid, Icon, Segment, Header, Label, Button } from "semantic-ui-react";

export default function Task(props) {
  const { task, deleteTask} = props;
  const { idTask, taskName, categoryTask } = task;




  return (
    <Grid.Column width={8} className="task-container">
      <Segment>
        {categoryTask && (
          <Label color="violet" ribbon="right">
            {categoryTask}
          </Label>
        )}
        <Header as="h3" className="header-task" textAlign="center">
          {taskName}
        </Header>
        <Header as="h5" textAlign="center">{idTask}</Header>
        <Grid center columns={2}>
          <Grid.Column>
            <Button color="red" onClick={()=> deleteTask(idTask)}>
              <Icon name="remove circle" />
              Eliminar
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
}
