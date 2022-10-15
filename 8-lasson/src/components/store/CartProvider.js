import {useReducer} from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item)  => item.id === action.item.id)
        const existingItem = state.items[existingCartItemIndex];
        let updateItems;

        if(existingItem){
            const updatedCartItem = {
                ...existingItem,
                amount: existingItem.amount +action.item.amount,
            };
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updatedCartItem;
        }else{
           updateItems = state.items.concat(action.item);
        }

        return {
            items: updateItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex((item)  => item.id === action.id)
        const existingItem = state.items[existingCartItemIndex];
        const updatedToAmount =  state.totalAmount - existingItem.price;

        let updateItems;

        if(existingItem.amount === 1){
            updateItems = state.items.filter(item => item.id !== action.id);
        }else{
          const  updateItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            };
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem;
        }

        return {
            items: updateItems,
            totalAmount: updatedToAmount
        }
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemHandler
    };

    return (
      <CartContext.Provider value={cartContext}>
          {props.children}
      </CartContext.Provider>
    );
};

export default CartProvider;
