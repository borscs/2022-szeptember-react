import React, {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    // const [userInputs, setUserInputs] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInputs({
        //     ...userInputs,
        //   title:  event.target.value});
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInputs(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInputs(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };

        props.onSaveData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                           value={title}
                           onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                           value={amount}
                           min='0.01'
                           step='0.5'
                           onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                           value={date}
                           min='2022-08-01'
                           onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;
