import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='upperSide'>
                    <div className='left'>
                        <img src='assets/Group 1436.svg' alt=""/>
                        <p>
                            <section>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            </section>
                            <section>
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                            vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed dia m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                            </section>
                            <section>
                            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                            qui blandit
                            </section>
                        </p>
                        <div className='line'></div>
                    </div>
                    <div className='right'>
                        <div className='subscribe'>
                            <p>Subscribe to our newsletter</p>
                            <div className='mail'>
                                <p>Enter Your Mail</p>
                                <button>
                                    Subscribe
                                    <img src='assets/Group 1431.svg' alt=""/>
                                    </button>
                            </div>
                        </div>
                        <div className='contacts'>
                            <div className='services'>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Track Order</p>
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Sell With Us</p>
                                <p>Shipping And Returns</p>
                            </div>
                            <div className='socialMedia'>
                                <ul>
                                    <li><img src='assets/Group 1432.svg' height="30px" width="30px" alt=""/> /YESHTERY</li>
                                    <li><img src='assets/Group 1435.svg' height="30px" width="30px" alt=""/>/YESHTERY</li>
                                    <li><img src='assets/Group 1433.svg' height="30px" width="30px" alt=""/>/YESHTERY</li>
                                    <li><img src='assets/Group 1434.svg' height="30px" width="30px" alt=""/>/YESHTERY</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lowerSide'>
                    <p>
                    © 2021 yeshtery, all rights reserved.
                    </p>
                    <div className='pay'>
                        <img src='assets/Rectangle 586.png' alt=""/>
                        <img src='assets/Group 1437.png' alt=""/>
                        <img src='assets/Group 1438.png' alt=""/>
                    </div>
                    <div className='poweredBy'>
                        Powered By <img src='assets/Group 1439.svg' alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}