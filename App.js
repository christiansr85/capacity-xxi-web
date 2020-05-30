import React, { Fragment, useEffect, useState } from 'react';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [maxAforo, setMaxAforo] = useState(null);
    const [apertura, setApertura] = useState(null);
    const [cierre, setCierre] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/parameter')
            .then(res => res.json())
            .then(res => {
                setMaxAforo(parseInt(res.maxaforo));
                setApertura(res.apertura);
                setCierre(res.cierre);
            });
    }, []);

    return (
        <Fragment>
            <Header />
            <Main maxAforo={maxAforo}/>
            <Footer maxAforo={maxAforo} cierre={cierre} apertura={apertura} />
        </Fragment>
    )
}

export default App;