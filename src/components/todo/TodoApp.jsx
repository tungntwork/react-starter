import './todo.css';
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';

const TodoApp = () => {
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew />
            <TodoData />
            <div className="todo-image">
                <img src={reactLogo} alt="" className="logo" />
            </div>
        </div>
    )
}

export default TodoApp