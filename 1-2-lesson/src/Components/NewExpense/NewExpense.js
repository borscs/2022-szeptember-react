import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.newExpenses(expenseData);
    };

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;
