import React from 'react'

import me from '../assets/images/images/prof.png'

const Header = () => {
    return (

        <div className="container">

            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-xl-4">
                    {/* <h1>I design products <br></br>
                that delight and <br></br>
                inspire people
                </h1> */}

                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, doloribus et cumque quaerat reprehenderit sit? Voluptatibus dolores iste eius ad cumque quasi adipisci nostrum harum?</h1>
                </div>

                <div className="col-12 col-sm-12 col-md-3 col-xl-8 d-flex justify-content-end">
                    <img src={me} alt="" />
                </div>

            
                
            </div>


        </div>
    )
}

export default Header