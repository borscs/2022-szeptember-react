import {useState} from "react";
import OutPut from './OutPut'
const Greeting = () => {
    const [changed, setChanged] = useState(false);

    const changeTextHandler = () => {
        setChanged(!changed);
    }
    return (
        <div>
            <h2>Hello Word</h2>
            {!changed ? <OutPut>It's good</OutPut> : <OutPut>Changed</OutPut>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
};

export default Greeting;
