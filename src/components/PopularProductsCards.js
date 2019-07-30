import React, { useState } from 'react';


function PopularProductsCards(item) {
    const [data] = useState(item)
    return (
        <div className={data.class}>
            <a className="popup-img" href={data.img}>
                <img src={data.img} alt="img"/>
            </a>
        </div>
    )
}

export default PopularProductsCards;

