
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
    const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();

    const creatTask = (taskText, taskData) => {
        const generatedId = taskData.name;
        const createdTask = {id: generatedId, text: taskText}

        props.onAddTask(createdTask);
    }

    const enteredTaskHandler = async (taskText) => {
        sendTaskRequest(
            {
                url: 'https://react-2022-szept-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: { text: taskText },
            },
            creatTask.bind(null, taskText)
        );
    }

    return (
        <Section>
            <TaskForm onEnterTask={enteredTaskHandler} loading={isLoading}/>
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
