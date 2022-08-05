import 'semantic-ui-css/semantic.min.css'
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';

function App() {
  //esta funcion se la pasaremos por props a Input task para poder crear las tasks
  const createTask = (task ) => {
    console.log(task);
  }
  return (
  <Container>
    <Header/>
    <InputTask createTask={createTask}/>
  </Container>
  );
}

export default App;
