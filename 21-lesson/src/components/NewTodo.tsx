import React, {useRef} from "react";
import classes from './NewTodo.module.css'
const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();

        const enteredText = todoTextInput.current!.value;

        if(enteredText.trim().length === 0){
            return;
        }
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInput}/>
            <button>Add Todo</button>
        </form>
    )
};


export default NewTodo;
