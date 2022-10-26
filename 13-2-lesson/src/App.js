import React, {useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hooks/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const { isLoading, error, sendRequest: fetchTasks} = useHttp();

    // const fetchTasks = async (taskText) => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //         const response = await fetch(
    //             'https://react-2022-szept-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
    //         );
    //
    //         if (!response.ok) {
    //             throw new Error('Request failed!');
    //         }
    //
    //         const data = await response.json();
    //
    //         const loadedTasks = [];
    //
    //         for (const taskKey in data) {
    //             loadedTasks.push({id: taskKey, text: data[taskKey].text});
    //         }
    //
    //         setTasks(loadedTasks);
    //     } catch (err) {
    //         setError(err.message || 'Something went wrong!');
    //     }
    //     setIsLoading(false);
    // };

    useEffect(() => {
        const transformData = (tasksObj) =>{
            const loadedTask = [];

            for(const taskKey in tasksObj){
                loadedTask.push({id: taskKey, text: tasksObj[taskKey].text});
            }
            setTasks(loadedTask);
        };

         fetchTasks(
            {url: 'https://react-2022-szept-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'},
            transformData
        );
    }, []);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler}/>
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
