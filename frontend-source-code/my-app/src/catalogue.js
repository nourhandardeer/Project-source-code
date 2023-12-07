import React from 'react';
import phot1 from './phot1.jpg'
function catalogue(){
    return(
        <div className='cata'>
            <div className='catalogue1'>
                <button>
                    <img src='./phot1.jpg' alt=' '/>show all

                </button>
                {/* <a href="/">show all</a> */}
                <a href="/">Ring</a>
                <a href="/">Necklace</a>
                <a href="/">Bracelet</a>
                <a href="/">Earring</a>
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
                <p>Whant to see the more catalogue?</p>
                <button>See more</button>
            </div>
        </div>
    );
}
export default catalogue;