import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";


const Expenses = (props) => {
    return (
        <Card>
            {props.items.map((item) => (
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
