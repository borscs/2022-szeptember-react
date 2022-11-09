import {useDispatch, useSelector} from 'react-redux';

import classes from './Counter.module.css';
import {counterActions} from'../Store/counter';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increases(10));
    }

    return (
        <main className={classes.counter}>
            {showCounter && <h1>Redux Counter</h1>}
            <div className={classes.value}>{counter}</div>
            <button onClick={incrementHandler}>Toggle Counter+1</button>
            <button onClick={increaseHandler}>Toggle Counter+10</button>
            <button onClick={decrementHandler}>Toggle Counter-1</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
