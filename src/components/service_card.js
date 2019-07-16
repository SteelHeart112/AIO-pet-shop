import React, { useState } from 'react';

function ServiceCard(item) {
    const [data] = useState(item)
    return (

        <div className="services-block">
            <i className={data.class}></i>
            <span>{data.title}</span>
            <p className="separator">{data.body}</p>

        </div>

    )
}

export default ServiceCard;