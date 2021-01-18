import React, { Component } from 'react';
import VideoLooper from 'react-video-looper';

export default class Introduction extends Component {
  render() {
    return (
      
      <div>              
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
       
          <div className="flexslider js-fullheight" style={{background:"url(https://media.giphy.com/media/S0gmWimVqcQtuanNFA/giphy.gif) no-repeat", WebkitBackgroundSize:"cover", backgroundColor: "black", backgroundPosition:"20% 0%"}}>

            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-6 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: 'white', fontSize: '30px'}}>Welcome!</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-6 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: 'white', fontSize: '30px'}}>Chrono Coffee</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                  <div className="row">
                    <div className="col-md-12 col-md-offset-6 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: 'white', fontSize: '30px'}}>We take our caffeine..<br /> seriously..</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
