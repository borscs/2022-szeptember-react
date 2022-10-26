import classes from './Checkout.module.css';
import {useRef, useState} from "react";


const isEmpty = (value) => value.trim() === '';
const isNull = (value) => value.trim() >= 5;

const Checkout = (props) => {
    const [formInputValues, setFormInputValues] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeRef = useRef();



    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isNull(enteredPostalCode);

        setFormInputValues({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })

        const formIsValid =  enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

        if(!formIsValid){
            return;
        }
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputValues.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id='name' ref={nameInputRef}/>
                {!formInputValues.name &&  <p>Please Enter a valid Name</p>}
            </div>
            <div className={`${classes.control} ${formInputValues.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>Your city</label>
                <input type="text" id='city' ref={cityInputRef}/>
                {!formInputValues.city &&  <p>Please Enter a valid city</p>}
            </div>
            <div className={`${classes.control} ${formInputValues.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Your street</label>
                <input type="text" id='street' ref={streetInputRef}/>
                {!formInputValues.street &&  <p>Please Enter a valid street</p>}
            </div>
            <div className={`${classes.control} ${formInputValues.postalCode ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Your Postal</label>
                <input type="text" id='postal' ref={postalCodeRef}/>
                {!formInputValues.postalCode &&  <p>Please Enter a valid postalCode</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Submit</button>
            </div>
        </form>
    );
};

export default Checkout;
