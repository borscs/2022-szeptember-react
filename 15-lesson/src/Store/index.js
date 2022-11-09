import {createStore} from 'redux';

// const initialState = {counter: 0, showCounter: true};
//
// const countReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }
//
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }
//
//     if(action.type === 'toogle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }
//
//     return state;
// };
//
// const store = createStore(countReducer);
//
// export default store;


import { configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;

