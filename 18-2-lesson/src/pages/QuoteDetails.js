import {Route, useParams} from "react-router";
import {Fragment} from 'react';
import Comments from "../components/comments/Comments";

const QuotesDetails = () => {
    const params = useParams();
    return(
      <Fragment>
          <h1>Quote Details Page</h1>
          <p1>{params.quoteId}</p1>
          <Route path={`/quotes/${params.qouteId}/comments`} component={<Comments/>}/>
      </Fragment>
    );
};
export default QuotesDetails;
