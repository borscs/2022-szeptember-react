import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing(!isEditing);
    }

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.newExpenses(expenseData);
    };

    return(
        <div className='new-expense'>
            {isEditing && (
                <ExpenseForm onSaveData={saveExpenseDataHandler}
                             onCancel={editingHandler}/>
            )}
            {!isEditing && (
                <button onClick={editingHandler}>Add New Expense</button>
            )}

        </div>
    );
};

export default NewExpense;
