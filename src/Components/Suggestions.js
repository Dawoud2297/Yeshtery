import React, { Component } from 'react'
import data from '../services/data.json'


export default class Suggestions extends Component {
    render() {
        return (
            <div className='cardsContainer'>
                <div className='similarPro'>
                    <p>Similar Products</p>
                    <p id=''>You may like these products also</p>
                </div>
                <div className="cardContainer">
                    {
                        data.map((d) => {
                            return (
                                <div className='card'>
                                    <img src={d.designs[0]} className='cardImage' alt=''/>
                                    <img src='assets/Group 577.svg' className='cardRotation' alt=''/>
                                    <p className="cardTitle">
                                        {
                                            d.title
                                        }
                                    </p>
                                    <div className='cardMiddle'>
                                        <div>

                                            <div className='cardPrice'>
                                                {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EGP' }).format(d.price)}
                                            </div>
                                            <div className='cardPriceOff'>
                                                {Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EGP' }).format(d.price)}
                                            </div>
                                        </div>
                                        <img src={d.img} className='cardBrand' alt=''/>
                                    </div>
                                    <div className='cardRate'>
                                        <div className='stars'>
                                            <img src="assets/Path 368.svg" alt=''/>
                                            <img src="assets/Path 368.svg" alt=''/>
                                            <img src="assets/Path 368.svg" alt=''/>
                                            <img src="assets/Path 368.svg" alt=''/>
                                            <img src="assets/Path 369.svg" alt=''/>
                                        </div>
                                        <p>42 of 5</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}