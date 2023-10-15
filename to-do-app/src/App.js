
import './App.css';
import Todo from './Component/Todo'
import GetTodo from './Component/GetTodo';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div  >
      <Routes>
          <Route path='/' element={<Todo/>}/>
          <Route path='/gettodo' element={<GetTodo/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
