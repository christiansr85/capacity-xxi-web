import React from 'react';

function Footer({ apertura, cierre, maxAforo }) {
    return (
        <footer>
            <div className="info">
                <p>
                    Horario Apertura {apertura} - {cierre}
                </p>
                <p>
                    Aforo Máximo {maxAforo}
                </p>
            </div>
        </footer>
    );
}

export default Footer;