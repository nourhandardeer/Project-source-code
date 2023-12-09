import React from 'react';
import necklaces from './images/necklaces.png';
import bracelet from './images/bracelet.png';
import earrings from './images/earrings.png';
import rings from './images/rings.jpg';

function catalogue(){
    return(
        <div className='cata'>
            <div className='catalogue1'>
                
                <a href="/necklaces">
                    
                    <img src={necklaces}>
                    </img>
                    <hr color='white'></hr>
                    <p1> Necklaces</p1>
                </a>
                <a href="/rings">
                    <img src={rings}></img>
                    <hr color='white'></hr>
                    <p1>Rings</p1>
                </a>
                <a href="/bracelets">
                <img src={bracelet}></img>
                <hr color='white'></hr>
                    <p1> Bracelets</p1>
                    
                </a>
                <a href="/earings">
                    <img  src={earrings}></img>
                    <hr color='white'></hr>
                    <p1> Earring</p1>
                    
                </a>
            </div>
     
        </div>
    );
}
export default catalogue;