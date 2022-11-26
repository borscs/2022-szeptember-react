import {Route, Routes, useParams} from "react-router";
import {Fragment} from 'react';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import {Link} from "react-router-dom";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuotesDetails = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    console.log(params);
    if(!quote){
        return <p>Not found Page</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <div className='centered'>
                <Link className='btn--flat' to="comments">
                    Load Comments
                </Link>
            </div>
            <Routes>
                <Route path="comments" element={<Comments/>}/>
            </Routes>
        </Fragment>
    );
};
export default QuotesDetails;
