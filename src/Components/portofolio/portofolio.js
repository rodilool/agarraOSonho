import React, { Component } from 'react'
import './portofolio.css'
import house from '../../pics/beautiful-house-20.jpg'

const Portofolio = () => {
    return(
        <div className='grid'>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
            <div className='tile one'>
                <img className='house' src={house}/>
                <button className='button'>See more</button>
            </div>
        </div>
    )
}

export default Portofolio