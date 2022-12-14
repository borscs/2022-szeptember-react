import {cartActions} from "./cart-slice";
import {uiActions} from "./ui-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-2022-szept-default-rtdb.europe-west1.firebasedatabase.app/Cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch Cart!');
            }

            return await response.json();
        };
        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'fetching cart data failed!'
                })
            );
        }
    }
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        const response = async () => {
            const responseData = await fetch('https://react-2022-szept-default-rtdb.europe-west1.firebasedatabase.app/Cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!responseData.ok) {
                throw new Error("Sending cart data failed!")
            }
        }
        try{
            await response();

            dispatch(uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!'
                })
            );
        }catch (error) {
            dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                })
            )
        }
    }
}
