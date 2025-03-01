import React, { useState, useEffect } from 'react';
import settings from './settings.json';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [parameters, setParameters] = useState(null);

    const urlParameters = `${settings.baseUrl}/parameter`;
    useEffect(() => {
        fetch(urlParameters)
            .then(res => res.json())
            .then(res => {
                const params = {
                    maxAforo: parseInt(res.maxaforo),
                    apertura: res.apertura,
                    cierre: res.cierre
                };
                setParameters(params)
            });
    }, []);

    return (
        <Context.Provider value={{
            maxAforo: parameters ? parameters.maxAforo : null,
            apertura: parameters ? parameters.apertura : null,
            cierre: parameters ? parameters.cierre : null
        }}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };