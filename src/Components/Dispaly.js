import React, { Component } from 'react'
import data from '../services/data.json'

export default class Dispaly extends Component {
  render() {
    return (
      <div className='display'>
        <div className='photos'>
          <div className='main'>
            <img src='assets/Group 338.svg' alt='' />
            <img src={data[6].designs[0]} alt='' />
          </div>
          <div className='variety'>
            <img src="assets/Path 347.svg" height="24px" width="16px" alt='' />
            {
              data[6].designs.map((d) => {
                return (
                  <img src={d} height="100px" width="100px" key={d} alt='' />
                )
              })
            }
            <img src='assets/Path 346.svg' height="24px" width="16px" alt='' />
          </div>
        </div>
        <div className='details'>
          <img src={data[6].img} alt='' />
          <p className='title'>
            {data[6].title}
          </p>
          <p id="category">{data[6].category}</p>
          <div className='rate'>
            <div className='stars'>
              <img src="assets/Path 368.svg" alt='' />
              <img src="assets/Path 368.svg" alt='' />
              <img src="assets/Path 368.svg" alt='' />
              <img src="assets/Path 368.svg" alt='' />
              <img src="assets/Path 369.svg" alt='' />
              <p>
                4.9 of 5
              </p>
            </div>
            <p>
              22 Rates
            </p>
          </div>
          <div className="price">
            <p>
              {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EGP' }).format(data[6].price)}
            </p>
            <p>
              {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EGP' }).format(data[6].price)}
            </p>
            <p id='off'>
              30% Off
            </p>
          </div>
          <div className="sizeContainer">
            <p id="subtitle">Size</p>
            <div className="size">
              <p>Small</p>
              <p>Medium</p>
              <p id="large">Large</p>
              <p>XLarge</p>
              <p>XXLarge</p>
            </div>
          </div>
          <div className='colors'>
            <p id="subtitle">Color</p>
            {
              data[6].colors.map((c) => {
                return (
                  <img src={c} key={c} alt='' />
                )
              })
            }
          </div>
          <div className='quantityCounter'>
            <p id="subtitle">Quantity</p>
            <div className='quantityNum'>
              <button onClick={this.props.decrement}><img src='assets/Path 364.svg' alt='' /></button>
              <p>{this.props.cartContentQuantity}</p>
              <button onClick={this.props.increment}><img src='assets/Path 363.svg' alt='' /></button>
            </div>
          </div>
          <div className='addToCart'>
            <button
              onClick={() => this.props.addToCart(data[6].id, data[6].price)}
              disabled={this.props.cartContentQuantity === 0}
            >Add To Cart</button>
            <button>Pickup From Store</button>
          </div>
        </div>
      </div>
    )
  }
}
