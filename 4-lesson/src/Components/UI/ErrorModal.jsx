import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import errorCss from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div className={errorCss.backdrop} onClick={props.onChange}/>,
                document.getElementById('backdrop-root')
            )};
            {ReactDOM.createPortal(
                <Card className={errorCss.modal}>
                    <header className={errorCss.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={errorCss.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={errorCss.actions}>
                        <Button onClick={props.onChange}>Okey</Button>
                    </footer>
                </Card>,
                document.getElementById('overly-root')
            )}
        </Fragment>
    );
};

export default ErrorModal;
