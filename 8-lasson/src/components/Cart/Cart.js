import React  from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

class Cart extends React.Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {
            totalAmount: ``,
            hasItems: false,
        };
    }

    componentDidMount() {
        this.setState({
            totalAmount: `$${this.context.totalAmount.toFixed(2)}`,
        });
    }

    CartItemRemoveHandler(id) {
        this.context.removeItem(id);
        this.setState({
            totalAmount: `$${this.context.totalAmount.toFixed(2)}`,
        });
    }

    CartItemAddHandler(item) {
        this.context.addItem({ ...item, amount: 1 });
        this.setState({
            totalAmount: `$${this.context.totalAmount.toFixed(2)}`,
        });
    }

    render() {
        const cartItems = (
            <ul className={classes["cart-items"]}>
                {this.context.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={this.CartItemRemoveHandler.bind(this, item.id)}
                        onAdd={this.CartItemAddHandler.bind(this, item)}
                    />
                ))}
            </ul>
        );

    return (
        <Modal onClose={this.props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{this.state.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={this.props.onClose}
                >
                    Close
                </button>
                {this.state.hasItems && <button className={classes.button}>i</button>}
            </div>
        </Modal>
    );
    }
}

// const Cart = (props) => {
//   const cartCtx = useContext(CartContext);

//   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
//   const hasItems = cartCtx.items.length > 0;

//   const CartItemRemoveHandler = (id) => {
//     cartCtx.removeItem(id);
//   };

//   const CartItemAddHandler = (item) => {
//     cartCtx.addItem({ ...item, amount: 1 });
//   };

//   const cartItems = (
//     <ul className={classes["cart-items"]}>
//       {cartCtx.items.map((item) => (
//         <CartItem
//           key={item.id}
//           name={item.name}
//           amount={item.amount}
//           price={item.price}
//           onRemove={CartItemRemoveHandler.bind(null, item.id)}
//           onAdd={CartItemAddHandler.bind(null, item)}
//         />
//       ))}
//     </ul>
//   );

//   return (
//     <Modal onClose={props.onClose}>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>{totalAmount}</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes["button--alt"]} onClick={props.onClose}>
//           Close
//         </button>
//         {hasItems && <button className={classes.button}>i</button>}
//       </div>
//     </Modal>
//   );
// };

export default Cart;
