import React from 'react';

function Footer() {
    const apertura = '08:00';
    const cierre = '20:00';
    const maxAforo = '60';

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