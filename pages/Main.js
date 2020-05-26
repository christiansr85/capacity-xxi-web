import React, { Fragment } from 'react';

import TrafficLights from '../components/TrafficLights';

import imgIconsPeople from '../assets/img/icons-people.png';
import imgEnter from '../assets/img/Enter.png';
import imgExit from '../assets/img/Exit.png';

function Main() {
    const aforoActual = 3;
    const entradas = 4;
    const salidas = -1;
    const maxAforo = '60';

    function getTrafficLights() {
        if (aforoActual >= maxAforo) {
            return <div className="traffic-light">
                <div id="stopLight" className="bulb"></div>
                <div id="goLight" className="bulb2"></div>
            </div>
        }
        else {
            <div className="traffic-light">
                <div id="stopLight" className="bulb"></div>
                <div id="goLight" className="bulb2"></div>
            </div>
        }
    }

    return (
        <Fragment>

            <div className="main">

                <div>
                    <span>Aforo Actual  {aforoActual}</span>
                </div>

                <div>
                    <img src={imgIconsPeople} height="200" width="200" />
                </div>

                <div>
                    <div>
                        <img src={imgEnter} height="100" width="100" />
                        <span>Entradas</span>
                        <span>{entradas}</span>
                    </div>
                    <div>
                        <img src={imgExit} height="100" width="100" />
                        <span>Salidas</span>
                        <span>{salidas}</span>
                    </div>
                </div>

                <div>
                    <TrafficLights />
                </div>

            </div>

        </Fragment>
    );
}

export default Main;