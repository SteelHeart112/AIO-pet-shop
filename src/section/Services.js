import React from 'react';
import service_card from '../components/service_card';

function Services() {
    return (
        <div id="services">
            <div className="container">
                <div className="services-carousel owl-theme">
                    {service_card(service_card_info.service1)}
                    {service_card(service_card_info.service2)}
                    {service_card(service_card_info.service3)}
                    {service_card(service_card_info.service4)}
                    {service_card(service_card_info.service5)}
                    {service_card(service_card_info.service6)}

                </div>

            </div>

        </div>


    )
}

export default Services;

const service_card_info = {
    service1: {
        class:'ion-ios-browsers-outline',
        title: 'Choose your package',
        body: 'Subscribe to a monthly package that best suits you'
    },
    service2: {
        class:'ion-ios-browsers-outline',
        title: 'Your beer is curated',
        body: 'Carefully selected for you needs'
    },
    service3: {
        class:'ion-ios-browsers-outline',
        title: 'Enjoy your beers!',
        body: 'Learn more about craft beers.'
    },
    service4: {
        class:'ion-ios-browsers-outline',
        title: 'Buy more of what you love',
        body: 'To an English person, it will seem like simplified English,told me what '
    },
    service5: {
        class:'ion-ios-browsers-outline',
        title: 'VIP priveleges',
        body: 'To an English person, it will seem like simplified English,told me what '
    },
    service6: {
        class:'ion-ios-browsers-outline',
        title: 'VIP priveleges',
        body: 'To an English person, it will seem like simplified English,told me what '
    }

}