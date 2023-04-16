import React, { Component } from 'react'
import data from '../services/data.json'

export default class CartContent extends Component {
    total = () => {
        return Math.abs(this.props.cartContentQuantity * this.props.price)
    }
    render() {
        return (
            <div className='cartContent'>
                <div className='blindSide' onClick={this.props.closeCart}></div>
                <div className='cart'>
                    <div className='cartHead'>
                        <button onClick={this.props.closeCart}>
                            <img src='assets/Group 1440.svg' alt='' />
                        </button>
                        <h2>My Cart</h2>
                        <p>Cart Summary</p>
                    </div>
                    <div className='cartBody'>
                        {
                            this.props.id !== null ? (
                                <>
                                    {
                                        data.filter((d) => {
                                            return d.id === this.props.id
                                        }).map(d => {
                                            return (
                                                <div className='cartCard'>
                                                    <img src={d.designs[0]} alt='' />
                                                    <div className='cartDetails'>
                                                        <p>{d.title}</p>
                                                        <p>
                                                            <strong>Quantity : </strong>
                                                            {this.props.cartContentQuantity}
                                                        </p>
                                                        <div className='cartCardPrice'>
                                                            <p>
                                                                {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EGP' }).format(d.price)}
                                                            </p>
                                                            <button onClick={this.props.removeFromCart}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                    <div className='options'>
                                        <p><strong>Total : </strong>
                                            {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EGP' }).format(this.total())}
                                        </p>
                                        <div className='actions'>
                                            <button>Review Cart</button>
                                            <button>Complete Checkout</button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className='noItems'>
                                    You have no items yet..
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
