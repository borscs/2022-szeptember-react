import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, Fragment} from "react";
import Notification from "./components/UI/Notification";
import {sendCartData, fetchCartData} from "./store/cart-actions";

let isLoading = true;

function App() {
    const showCart = useSelector((state) => state.ui.carIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if(isLoading){
           isLoading = false;
            return;
        }
        if( cart.change ) {
            dispatch(sendCartData(cart));
        }

    }, [cart, dispatch])

    return (
        <Fragment>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
