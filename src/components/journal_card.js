import React, { useState } from 'react';

function JournalCard(item) {
    const [data] = useState(item)
    return (
        
        <div className="col-lg-4 col-md-6">
            <div className="journal-info">

            <a href="blog-single.html">
                <img src={data.img_url} className="img-responsive" alt="img"/>
                </a>

            <div className="journal-txt">

                <h4><a href="blog-single.html">{data.title}</a></h4>
                <p className="separator">{data.body}</p>

            </div>

            </div>
        </div>
    )
}

export default JournalCard;

