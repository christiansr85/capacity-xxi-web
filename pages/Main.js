import React, { Fragment } from 'react';

function Main() {
    const aforoActual = 3;
    const entradas = 4;
    const salidas = -1;
    const apertura = '80:00';
    const cierre = '20:00';
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
            {/* <div className="titulo-panel">
                <div className="titulo-panel">
                    <img src={logo} height="100" width="100" />
                </div>
            </div> */}

            <div className="datos-panel">
                <div className="datos-panelt0"> Aforo Actual </div>
                <div className="datos-panelt1">{aforoActual}</div>

                <div>

                </div>

                {/* <table>
                    <tbody>
                        <tr>
                            <th style="width: 40%;">
                                <div> <img src="/assets/img/icons-people.png" height="200" width="200" /> </div>
                            </th>
                            <th style="width: 10%;"> &nbsp; </th>
                            <th style="width: 40%;">
                                <table align="right">
                                    <tbody>
                                        <tr>
                                            <td> <img src="/assets/img/Enter.png" height="100" width="100" /> </td>
                                            <td style="align:center;"> <h2> Entradas </h2>  </td>
                                            <td className="datos-panelt3">{entradas}</td>
                                        </tr>
                                        <tr>
                                            <td> <img src="/assets/img/Exit.png" height="100" width="100" /> </td>
                                            <td> <h2> Salidas </h2> </td>
                                            <td className="datos-panelt3" >{salidas}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                        </tr>
                    </tbody>
                </table> */}

            </div>

            {getTrafficLights()}

            <div className="titulo-panel">
                Horario Apertura {apertura} - {cierre}
                <br />
                    Aforo Máximo {maxAforo}
            </div>

        </Fragment>
    );
}

export default Main;