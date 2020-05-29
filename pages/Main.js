import React, { Fragment, useState } from 'react';

import TrafficLights from '../components/TrafficLights';

import imgIconsPeople from '../assets/img/icons-people.png';
import imgEnter from '../assets/img/Enter.png';
import imgExit from '../assets/img/Exit.png';

function Main() {
    const [aforoActual, setAforoActual] = useState(3);
    const [entradas, setEntradas] = useState(4);
    const [salidas, setSalidas] = useState(-1);
    const [maxAforo, setMaxAforo] = useState('60');

    return (
        <Fragment>

            <div className="main">

                <div className="main__capacity">
                    <span className="main__capacity-item">Aforo Actual</span><span className="main__capacity-item main__capacity-data">{aforoActual}</span>
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
                    <TrafficLights pass="true" />
                </div>

            </div>

        </Fragment>
    );
}

export default Main;