import React from 'react';
import PopularProductsCards from './PopularProductsCards';


function PopularProducts() {
    return (
        <div id="portfolio" className="text-center paddsection">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Popular Products</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="portfolio-list">
                        <ul className="nav list-unstyled" id="portfolio-flters">
                        <li className="filter filter-active" data-filter=".all">All</li>
                        <li className="filter" data-filter=".Foods">Foods</li>
                        <li className="filter" data-filter=".Toys">Toys</li>
                        <li className="filter" data-filter=".Walk-Ropes">Walk Ropes</li>
                        <li className="filter" data-filter=".Utensils">Utensils</li>
                        <li className="filter" data-filter=".Training">Training</li>
                        <li className="filter" data-filter=".Beds-Mattresses-Cat-Trees">Beds/ Mattresses/ Cat Trees</li>
                        <li className="filter" data-filter=".Cages-Bags-Fences">Cages/ Bags/ Fences</li>
                        <li className="filter" data-filter=".Cosmetics">Cosmetics</li>
                        <li className="filter" data-filter=".Costumes">Costumes</li>
                        <li className="filter" data-filter=".Grooming-Tools">Grooming Tools</li>
                        <li className="filter" data-filter=".Heath-Cares-Cat-Sands">Heath Cares/ Cat Sands</li>
                        <li className="filter" data-filter=".Walk-your-pet">Walk your pet</li>
                        <li className="filter" data-filter=".Grooming-Services">Grooming Services</li>
                        <li className="filter" data-filter=".Pet-Hotels">Pet Hotels</li>
                        <li className="filter" data-filter=".Matchmaking-Services">Matchmaking Services</li>
                        <li className="filter" data-filter=".Training-For-Pet">Training For Pet</li>
                        <li className="filter" data-filter=".Carrer-Courses">Carrer Courses</li>
                        <li className="filter" data-filter=".Puppies">Puppies</li>
                        <li className="filter" data-filter=".Kittens">Kittens</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-container">
                {popularProducts_pic.map(popularProduct => {
                    return PopularProductsCards(popularProduct)})
                    }
            </div>
        </div>
    )
}

export default PopularProducts;

const popularProducts_pic = [
     {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Foods',
        img:'https://dr-trish.com/wp-content/uploads/2018/08/Best-Pet-Food-Companies-in-India-720x340.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Toys',
        img:'https://images-na.ssl-images-amazon.com/images/I/81pZ-cKtyJL._SX425_.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Walk-Ropes',
        img:'https://img.staticbg.com/thumb/large/oaupload/banggood/images/C8/51/41e65bde-e80b-4b7a-9004-a741fbf1d342.jpg.webp'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Utensils',
        img:'https://ae01.alicdn.com/kf/HTB1MrBTXsnI8KJjSspeq6AwIpXak/2017-New-Pet-Utensils-Stainless-Steel-Hanging-Dog-Bowl-Cat-Bowl-Can-be-Fixed-Pet-Single.jpg_640x640.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Training',
        img:'https://www.lazyliving.co.nz/image/cache/catalog/incoming/images/full/8/b/8b7e80d5-a5ca-c228-bc67-fd7ce5ff374f-10049-800x800.jpeg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Beds-Mattresses-Cat-Trees',
        img:'https://ae01.alicdn.com/kf/HTB1fF9oKXXXXXc9XVXXq6xXFXXXr/Pet-Dog-Bed-Cat-Dog-House-Winter-Warm-Tree-shape-dog-kennel-Soft-Thicken-Puppy-Cat.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Cages-Bags-Fences',
        img:'https://i.ebayimg.com/images/g/9qcAAOSwSYpb0C9X/s-l300.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Cosmetics',
        img:'https://www.companyofanimals.co.uk/sites/default/files/styles/full_width_desk/public/range%20shot%20for%20sachet%20book-2.jpg?itok=U4zG8Gc9'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Costumes',
        img:'https://cdn.shopify.com/s/files/1/1385/9087/files/10525697_1534756570157983_2979236109898695414_n_large.jpg?v=1508335972'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Grooming-Tools',
        img:'https://images-na.ssl-images-amazon.com/images/I/41Y87Q9OORL._AC_SY400_.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Heath-Cares-Cat-Sands',
        img:'https://www.caninedesign.org/s/cc_images/teaserbox_4217523170.jpg?t=1459958488'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Walk-your-pet',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIZqZEBIT9BoXGD7f5W3OUao8xctFNXYF4ww6xoIWFkm1fRiviA'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Grooming-Services',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5XiE0qoqU1I534WSvtMzaZBvQSj8YN__bdfGuafO7TY76BPQ'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Pet-Hotels',
        img:'https://kimipet.vn/wp-content/uploads/2017/04/IMG_5295-1.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Matchmaking-Services',
        img:'https://vetstreet.brightspotcdn.com/dims4/default/a701c9d/2147483647/thumbnail/590x420/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fcc%2Fb5%2Fd8d4849b488aa5dd87047f5f472b%2Fcav-king-charles-AP-NM4WCH-590mk082912.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Training-For-Pet',
        img:'https://mk0cesarswaykigy4yk3.kinstacdn.com/wp-content/uploads/2018/09/5-essential-commands-you-can-teach-your-dog_1.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Carrer-Courses',
        img:'https://www.animal-job.co.uk/images/xanimal-care-courses-animal-jobs-direct-v03.jpg.pagespeed.ic.-oTS5dAAPS.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Puppies',
        img:'https://images2.minutemediacdn.com/image/upload/c_crop,h_2276,w_4043,x_0,y_23/f_auto,q_auto,w_1100/v1553128862/shape/mentalfloss/536413-istock-459987119.jpg'
    } ,
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Kittens',
        img:'https://www.thesprucepets.com/thmb/810a_HYIb2E8DxkedI6V-3gtkys=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg'
    },
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Beds-Mattresses-Cat-Trees',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdRV09L54VRP01FG3bfnn4Av1BbKe268EBYI4nYf1lRHRZzGT'
    }, 
    {
        class:'col-lg-4 col-md-6 portfolio-thumbnail all Cages-Bags-Fences',
        img:'https://i.pinimg.com/474x/8a/ee/e4/8aeee4e16fd12a58311da81233351f5d--backyard-fences-backyard-ideas.jpg'
    } 
]