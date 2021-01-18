import React, { Component } from 'react';

export default class SidebarMobile extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" style={{color: 'white'}}><i /></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight" style={{overflow: 'hidden', height: '100%'}}>
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/logo_draft.png)' }} />
                            <h2 id="colorlib-logo"><a href="index.html"><small>CHRONO COFFEE</small></a></h2>
                            <span className="email"><i className="icon-mail"></i> contact@chrono.coffee</span>
                            {/*<span className="number"><i className="icon-phone"></i> +1 775 283 8248</span>*/}
                        </div>
                        <br/>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{overflow: 'hidden'}}>
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#" data-nav-section="about">About</a></li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li><a href="#" data-nav-section="timeline">Professional Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu" style={{overflow: 'hidden', paddingTop: '10px', textAlign: "center", display:"inline-block"}}>
                            <div className="icon-row" style={{display:"inline-flex", textAlign:"center"}}>
                                <div className="div-icon" style={{paddingRight:"1em"}}> 
                                    <a href="#" target="_blank" className="icon-links" ><i className="icon-facebook2" /></a>
                                </div>
                                <div className="div-icon" style={{paddingRight:"1em"}}>
                                    <a href="#" target="_blank" className="icon-links" ><i className="icon-instagram" /></a>
                                </div>
                                <div className="div-icon" style={{paddingRight:"1em"}}>
                                    <a href="#" target="_blank" className="icon-links" ><i className="icon-linkedin2" /></a>
                                </div>
                                <div className="div-icon" style={{paddingRight:"1em"}}>
                                <a href="#" target="_blank" className="icon-links"  ><i className="icon-youtube2"></i></a>
                                </div>
                            </div>
                        </nav>
                    </aside>
                </div>
            </div>
        )
    }
}