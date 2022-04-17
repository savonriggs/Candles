import React, {useState} from 'react'
import NavBar from '..'
import Sidebar from '../../Sidebar'
import {HeroContainer, HeroContent, Hero1, HeroP, HeroItems, HeroBtn} from "./HeroElements"

const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

  return (
    <HeroContainer>
        <NavBar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <Hero1>Best Candles Ever</Hero1>
                <HeroP>Made by Hand</HeroP>
                <HeroBtn>Order Candles</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero