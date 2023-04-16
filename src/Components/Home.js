import React, { Component, Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import CartContent from './CartContent'
const Dispaly = React.lazy(() => import("./Dispaly"))
const Suggestions = React.lazy(() => import("./Suggestions"))

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartContent: false,
      cartContentQuantity: 0,
      item_id: null,
      item_price: 0
    }
  }

  openCart = () => {
    this.setState({ showCartContent: true })
  }

  closeCart = () => {
    this.setState({ showCartContent: false })
  }

  incrementQuantity = () => {
    this.setState({
      cartContentQuantity: this.state.cartContentQuantity + 1
    })
  }
  
  decrementQuantity = () => {
    if (this.state.cartContentQuantity > 0) {
      this.setState({
        cartContentQuantity: this.state.cartContentQuantity - 1
      })
    }
  }

  addToCart = (id, price) => {
    this.setState({ item_id: id, item_price: price })
  }

  removeFromCart = () => {
    this.setState({ item_id: null, cartContentQuantity: 0 })
  }

  render() {
    return (
      <div className={`${this.state.showCartContent ? 'showCartContent' : 'home'}`}>
        <div className='headerContainer'>
          <Header
            openCart={this.openCart}
            cartContentQuantity={this.state.cartContentQuantity}
          />
        </div>
        <div className='displayContainer'>
          <Suspense fallback={<div className='loading'><h1>Loading...</h1></div>}>
            <Dispaly
              cartContentQuantity={this.state.cartContentQuantity}
              increment={this.incrementQuantity}
              decrement={this.decrementQuantity}
              addToCart={this.addToCart}
            />
          </Suspense>
        </div>
        <div className='SuggestionsContainer'>
          <Suspense fallback={<div className='loading'><h1>Loading...</h1></div>}>
            <Suggestions />
          </Suspense>
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
        {
          this.state.showCartContent && (
            <div className='cartContentContainer'>
              <CartContent
                closeCart={this.closeCart}
                cartContentQuantity={this.state.cartContentQuantity}
                id={this.state.item_id}
                price={this.state.item_price}
                removeFromCart={this.removeFromCart}
              />
            </div>
          )
        }
      </div>

    )
  }
}