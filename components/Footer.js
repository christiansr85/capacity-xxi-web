import React, { useContext } from 'react';
import { Context } from '../Context';

function Footer() {
    const { maxAforo, apertura, cierre } = useContext(Context);

    return (
        <footer>
            <div className="info">
                <p>
                    Horario Apertura {apertura} - {cierre}
                </p>
                <p>
                    Aforo {maxAforo}
                </p>
            </div>
        </footer>
    );
}

export default Footer;