import React from 'react'

    // Modules
import Profile from '../profile/profile'
import Slide from '../projects/slide'
    // Assets
import '../../assets/body/body.css'
import 'animate.css'
import Waves from '../../assets/body/firstwave.svg'
import WavesTwo from '../../assets/body/secondwave.svg'
import Star1 from '../../assets/body/starfirst.svg'
import Star2 from '../../assets/body/starsecond.svg'

export default function Body() {

    return (
        <body className="body">
            <div className="wave" />
            <Profile />
            <img id="star1" alt="star" src={Star1} />
            <img id="star2" alt="star2" src={Star2} />
            <Slide />
        </body>
    )
};