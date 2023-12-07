import React from 'react';
import necklaces from './images/necklaces.png';
import bracelet from './images/bracelet.png';
import earrings from './images/earrings.png';
import rings from './images/rings.jpg';

function catalogue(){
    return(
        <div className='cata'>
            <div className='catalogue1'>
                
                <a href="/">
                    <img src={necklaces}></img>
                    Nicklaces
                </a>
                <a href="/">
                    <img src={rings}></img>
                    Rings
                </a>
                <a href="/">
                <img src={bracelet}></img>

                    Bracelets
                </a>
                <a href="/">
                    <img  src={earrings}></img>
                    Earring
                </a>
            </div>
            <div>
                <img src="" alt="" />
                <p></p>
                <img src="" alt="" />
                <p></p>
                <img src="" alt="" /><p></p>
                <img src="" alt="" /><p></p>
                <img src="" alt="" /><p></p>
                <img src="" alt="" /><p></p>
            </div>
            <div className='but'>
                <p>Want to see the more catalogue?</p>
                <button>See more</button>
            </div>
        </div>
    );
}
export default catalogue;