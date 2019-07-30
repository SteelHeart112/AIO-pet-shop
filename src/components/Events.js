import React from 'react';
import EventsCard from './EventsCard';


function Events() {
    return (
        <div id="journal" className="text-left paddsection">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Events and Promotions</h2>
                </div>
            </div>
            <div className="container">
                <div className="journal-block">
                    <div className="row">
                        {events_info.map(events => {
                    return EventsCard(events)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;
const events_info = [
    {
        img_url:'http://www.pbandchi.com/wp-content/uploads/2017/04/Event-1160x822.jpg',
        title:'Weekly Offline For Your Pets',
        body:'We will be bringing a selection of our current available dogs; large and small, young and old, in addition to having photo albums of available dogs that couldn’t make the party but are still looking for their furever family if you wanted to know more about them'
    } ,
   {
        img_url:'http://bq.sg/wp-content/uploads/2015/05/16a16.jpg',
        title:'Sales Sales Sales',
        body:'Enjoy and get Up to 53% off with your pets this Vesak day promotion Exclusively for VIP members.'
    },
    {
        img_url:'https://www.waterwaypoint.com.sg/files/6045th-Anniversary_380-x-275.jpg',
        title:'45th Anniversary',
        body:'Pet Lovers Centre 45th Anniversary Promotion, Enjoy it now!'
    }
]
