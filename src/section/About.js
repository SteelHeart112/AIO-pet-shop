import React from 'react';

function About() {
    return (
<>
        <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">
    
            <div className="col-lg-4 ">
              <div className="div-img-bg">
                <div className="about-img">
{/*############################################# PHOTO will be replaced.....######################################################## */}
                  <img src="css_js/images/about-us.jpg" className="img-responsive" alt="me"/>
{/*############################################# PHOTO will be replaced.....######################################################## */}

                </div>
              </div>
            </div>
    
            <div className="col-lg-7">
              <div className="about-descr">
    
                <p className="p-heading">About Brew       ||</p>
                <p className="separator">Local craft beer delivered to your doorstep. An brew experience to taste Vietnam.A microbrewery or craft brewery is a brewery that produces small amounts of beer, typically much smaller than large-scale corporate breweries, and is independently owned. Such breweries are generally characterized by their emphasis on quality, flavor and brewing technique.[1][2]</p>
    
              </div>
    
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron bg" style={{backgroundImage:"url('css_js/images/about-us3.jpg')", height:'35em'}}>
        <h1 className="display-4 mt-4" style={{color:'white', fontSize:'70px', fontWeight:'bolder'}}>Purchase Now</h1>
        <p style={{color:'white'}}>Purchase our delicious beers!</p>
        <p className="lead">
        <a className="btn btn-lg mt-5" variant='warning' href="/Products" role="button">Purchase now</a>
        </p>
      </div>

</>
    )
}

export default About;