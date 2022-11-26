import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import {addQuote} from "../components/lib/api";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const NewQuotes = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const history = useNavigate();

    useEffect(() => {
        if(status === 'completed'){
            history('/');
        }
    },[status, history]);



    const addQuoteHandler = (quoteData) => {
            sendRequest(quoteData);
    };

    return (
      <QuoteForm  onAddQuote={addQuoteHandler}/>
    );
};
export default NewQuotes;
