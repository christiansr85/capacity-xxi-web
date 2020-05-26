import React, { Fragment } from 'react';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    )
}

export default App;