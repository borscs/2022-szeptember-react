import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <Card className='expenses'>
            <ExpensesFilter
                selectedDate={filteredYear}
                onChangeDate={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
                {filteredExpenses.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
