
import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cards from '../Cards';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <HeroSection />
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home;