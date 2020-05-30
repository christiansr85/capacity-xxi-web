import React, { Fragment, useState, useEffect, useContext } from 'react';

import { Context } from '../Context';
import TrafficLights from '../components/TrafficLights';

import imgIconsPeople from '../assets/img/icons-people.png';
import imgEnter from '../assets/img/Enter.png';
import imgExit from '../assets/img/Exit.png';

function Main() {
    const { maxAforo } = useContext(Context);
    const [aforoActual, setAforoActual] = useState(0);
    const [entradas, setEntradas] = useState(0);
    const [salidas, setSalidas] = useState(0);
    const [letPass, setLetPass] = useState(null);

    const url = {
        entrances: 'http://localhost:4000/register/entrances',
        dismissals: 'http://localhost:4000/register/dismissals'
    };
    const getData = () => {
        const promises = [
            fetch(url.entrances)
                .then(res => res.json()),
            fetch(url.dismissals)
                .then(res => res.json())
        ]
        Promise.all(promises)
            .then(res => {
                const entrances = res[0].entrances;
                const dismissals = res[1].dismissals;
                setEntradas(entrances);
                setSalidas(dismissals);
                const occupation = entrances + dismissals;
                setAforoActual(occupation);
                if (maxAforo !== null) {
                    const pass = occupation < maxAforo;
                    setLetPass(pass);
                }
            });
    }

    useEffect(() => {
        getData();
        const serviceInterval = setInterval(getData, 5000);
        return () => clearInterval(serviceInterval);
    }, [maxAforo]);

    return (
        <Fragment>

            <div className="main">

                <div className="main__capacity">
                    <span className="main__capacity-item">Ocupación:</span>
                    <span className="main__capacity-item main__capacity-data">{aforoActual}</span>
                    <span className="main__capacity-item">{aforoActual === 1 ? 'persona' : 'personas'}</span>
                </div>

                <div>
                    <img src={imgIconsPeople} height="200" width="200" />
                </div>

                <div className="access-counters">
                    <div className="access-counters__item">
                        <img src={imgEnter} height="100" width="100" />
                        <span>Entradas</span>
                        <span>{entradas}</span>
                    </div>
                    <div className="access-counters__item">
                        <img src={imgExit} height="100" width="100" />
                        <span>Salidas</span>
                        <span>{salidas}</span>
                    </div>
                </div>


                <div>
                    <TrafficLights pass={letPass} />
                </div>

            </div>

        </Fragment>
    );
}

export default Main;