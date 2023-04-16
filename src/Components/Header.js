import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='upper'>
                    <div className='leftSide'>
                        <div className='options'>
                            <img src='assets/Group 770.svg' alt=''/>
                        </div>
                        <div className='logo'>
                            <img src='assets/Group 769.svg' alt=''/>
                        </div>
                    </div>
                    <div className='arrows'>
                        <div className='leftArrow'>
                            <img src="assets/Path 797.svg" alt=''/>
                        </div>
                        <p>
                            Valentine’s Day Offers!
                            Buy Two Get One Free Shop Now
                        </p>
                        <p>Shop Now</p>
                        <div className='rightArrow'>
                            <img src='assets/Path 796.svg' alt=''/>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <ul>
                            <li>
                                <img src='assets/Group 756.svg' alt=''/>
                                <p>
                                    Contact Us
                                </p>
                            </li>
                            <li>
                                <img src='assets/Group 758.svg' alt=''/>
                                <p>
                                    Track Order
                                </p>
                            </li>
                            <li>
                                <img src='assets/Group 753.svg' alt=''/>
                                <p>
                                    Find A Store
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='middle'>
                    <div className='search'>
                        <img src='assets/Path 774.svg' alt=''/>
                        <p>
                            Search
                        </p>
                    </div>
                    <div className='brand'>
                        <img src='assets/Group 745.svg' alt=''/>
                    </div>
                    <div className="rightSide">
                        <ul>
                            <li>
                                <button onClick={this.props.openCart}>
                                    <img src='assets/Path 772.svg' alt=''/>
                                    <p className='quantity'>
                                        {this.props.cartContentQuantity}
                                    </p>
                                    <p>
                                        Cart
                                    </p>
                                </button>
                            </li>
                            <li>
                                <img src='assets/Path 771.svg' alt=''/>
                                <p>
                                    Wishlist
                                </p>
                            </li>
                            <li>
                                <img src='assets/Path 773.svg' alt=''/>
                                <p>
                                    Login
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bottom'>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Unisex</p>
                    <p>Kids</p>
                    <p>Best Seller</p>
                    <p>New Arrivals</p>
                    <p>Offers</p>
                </div>
                <div className='path'>
                    <p>
                        Men / Clothing / Tops / Adidas / Adidas Black T-Shirt
                    </p>
                </div>
            </div>
        )
    }
}
