import {Routes, Route} from "react-router";

import NotFound from "./pages/NotFound";
import AllQuote from "./pages/AllQuote";
import QuotesDetails from "./pages/QuoteDetails";
import NewQuotes from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

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
