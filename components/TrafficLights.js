import React from 'react';

function TrafficLights({ pass }) {
    const cssClass = pass ? 'traffic-lights traffic-lights--pass' : 'traffic-lights traffic-lights--stop';
    return (
        <div className={cssClass}>
            <div className="bulb bulb__pass"></div>
            <div className="bulb bulb__stop"></div>
        </div>
    );
}

export default TrafficLights;