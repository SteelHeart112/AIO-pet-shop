import React from 'react';
import journal_card from '../components/journal_card';

function Journal() {
    return (
        <div id="journal" className="text-left paddsection">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Why craft beer?</h2>
                </div>
            </div>
            
            <div className="container">
                <div className="journal-block">
                    <div className="row">
                        
                        {journal_info.map(journal => {
                    return journal_card(journal)
                        })}
                        
                        {/* {journal_card(journal_info.journal2)}
                        {journal_card(journal_info.journal3)} */}
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Journal;

// const journal_info = {
//     journal1: {
//         img_url:'css_js/images/journal-local.jpg',
//         title:'SUPPORT LOCAL COMMUNITIES',
//         body:'To an English person, it will seem like simplified English'
//     } ,
//     journal2:{
//         img_url:'css_js/images/journal-beer.jpg',
//         title:'CRAFT BEER IS DELICIOUS',
//         body:'To an English person, it will seem like simplified English'
//     },
//     journal3: {
//         img_url:'css_js/images/journal-ingredients.jpg',
//         title:'MADE WITH FRESH INGREDIENTS',
//         body:'To an English person, it will seem like simplified English'
//     }
// }
const journal_info = [
    {
        img_url:'css_js/images/journal-local.jpg',
        title:'SUPPORT LOCAL COMMUNITIES',
        body:'To an English person, it will seem like simplified English'
    } ,
   {
        img_url:'css_js/images/journal-beer.jpg',
        title:'CRAFT BEER IS DELICIOUS',
        body:'To an English person, it will seem like simplified English'
    },
    {
        img_url:'css_js/images/journal-ingredients.jpg',
        title:'MADE WITH FRESH INGREDIENTS',
        body:'To an English person, it will seem like simplified English'
    }
]
