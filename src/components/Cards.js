import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Γνώρισε μας καλύτερα!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Amazon'
                            path='/services'
                        /> 
                         <CardItem
                            src="images/img-2.jpg"
                            text="Swim in the blue waters of Phi Phi islands"
                            label='Phi Phi'
                            path='/services'
                        /> 
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-4.jpg"
                            text="Visit the famous rocky islet in the middle of the Pacific Ocean"
                            label='Baracota'
                            path='/services'
                        /> 
                         <CardItem
                            src="images/img-7.jpg"
                            text="Reach the top o Yelmen mountain with the best mountaineers"
                            label='Yelmen Mountain'
                            path='/services'
                        /> 
                         <CardItem
                            src="images/img-6.jpg"
                            text="Expolre Japan's capital and the world's most populous metropolis"
                            label='Tokyo'
                            path='/services'
                        /> 
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
