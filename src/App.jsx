import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const App = () => {

  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
        />
        <div className="todo-image">
          <img src={reactLogo} alt="" className="logo" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
