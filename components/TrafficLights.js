import React from 'react';

function TrafficLights() {
    return (
        <div className="traffic-light">
            <div className="bulb" style={{backgroundColor: 'red'}}></div>
            <div className="bulb2" style={{backgroundColor: 'green'}}></div>
        </div>
    );
}

export default TrafficLights;