import {Routes, Route} from "react-router";
import React from 'react'

import NotFound from "./pages/NotFound";
import AllQuote from "./pages/AllQuote";
import QuotesDetails from "./pages/QuoteDetails";
// import NewQuotes from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

const NewQuotes = React.lazy(() => import('./pages/NewQuote'));

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllQuote/>}/>
                <Route path='quotes/:quoteId/*' element={<QuotesDetails/>}/>
                <Route path='new-quote' element={<NewQuotes/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
