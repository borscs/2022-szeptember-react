import React, {useState} from 'react';
import Todos from "./components/Todos";
import Todo from "./models/todos";
import NewTodo from "./components/NewTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    // let input1 = new Todo('Learn React');
    // let input2 = new Todo('Learn TypeScript');
    //
    // setTodos((prevTodos) => {
    //     return prevTodos.concat(input1);
    // });
    //
    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) =>{
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
        </div>
    );
}

export default App;
