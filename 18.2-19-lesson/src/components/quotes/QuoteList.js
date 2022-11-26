import { Fragment } from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

const QuoteList = (props) => {
 const history = useNavigate();
 const location = useLocation();

 const queryParams = new URLSearchParams(location.search);
 const isSortingParams = queryParams.get('sort') ==='asc';

 const sortedQuotes = sortQuotes(props.quotes, isSortingParams);
 const cahngeSortingHandler = () => {
     history('/?sort='+(isSortingParams ? 'desc' : 'asc'))
 };
  return (
    <Fragment>
        <div className={classes.sorting}>
            <button onClick={cahngeSortingHandler}>
                Sort {isSortingParams ? 'Desc' : 'ASC'}
            </button>
        </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
