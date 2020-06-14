import React, { Fragment, useState, useEffect, useContext } from 'react';
import openSocket from 'socket.io-client';
import settings from '../settings.json';

import { Context } from '../Context';
import TrafficLights from '../components/TrafficLights';

import imgIconsPeople from '../assets/img/icons-people.png';
import imgEnter from '../assets/img/Enter.png';
import imgExit from '../assets/img/Exit.png';

function Main() {
    const { maxAforo } = useContext(Context);
    const [occupation, setOccupation] = useState(0);
    const [entradas, setEntradas] = useState(0);
    const [salidas, setSalidas] = useState(0);
    const [letPass, setLetPass] = useState(null);

    const newRegister = (value) => {
        if (value === 1) {
            setEntradas(ent => ent + 1);
        } else if (value === -1) {
            setSalidas(sal => sal - 1);
        }
    }

    const url = {
        entrances: `${settings.baseUrl}/register/entrances`,
        dismissals: `${settings.baseUrl}/register/dismissals`
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
                const entrances = parseInt(res[0].entrances);
                const dismissals = parseInt(res[1].dismissals);
                setEntradas(entrances || 0);
                setSalidas(dismissals || 0);
                const occ = entrances + dismissals;
                if (maxAforo !== null) {
                    const pass = maxAforo > occ;
                    setLetPass(pass);
                }
            });
    }


    // Gets initial count of the occupied place
    useEffect(() => {
        getData();
    }, [maxAforo]);

    useEffect(() => {
        if (maxAforo > 0) {
            const socket = openSocket(settings.baseUrl);
            socket.on('new_register', reg => newRegister(reg.entsal));
        }
    }, [maxAforo]);

    useEffect(() => {
        const occ = entradas + salidas;
        setOccupation(occ);
        if (maxAforo !== null) {
            const pass = maxAforo > occ;
            setLetPass(pass);
        }
    }, [entradas, salidas]);

    return (
        <Fragment>

            <div className="main">

                <div className="main__info">

                    <div className="main__capacity">
                        <span className="main__capacity-item">Ocupación:</span>
                        <span className="main__capacity-item main__capacity-data">{occupation}</span>
                        <span className="main__capacity-item">{occupation === 1 ? 'persona' : 'personas'}</span>
                    </div>

                    <div className="main__counters">
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
                    </div>
                </div>

                <div className="main__traffic-lights">
                    <TrafficLights pass={letPass} />
                </div>

            </div>

        </Fragment>
    );
}

export default Main;