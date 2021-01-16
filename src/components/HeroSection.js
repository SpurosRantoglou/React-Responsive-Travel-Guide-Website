import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <img className="home" src="/images/img-9.jpg" />
            <h1>Ταξίδεψε σε όλο τον κόσμο</h1>
            <p>Βρες τους ιδανικούς συνταξιδιώτες σου</p>
            <div className="hero-btns">
                <Button className="btns"    
                        buttonStyle="btn--outline"
                        buttonSize="btn--large">Προσφορά
                </Button>
                <Button className="btns"    
                        buttonStyle="btn--primary"
                        buttonSize="btn--large">Αναζήτηση 
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
