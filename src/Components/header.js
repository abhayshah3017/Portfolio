import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-content">
                
                <h1>Abhay Shah</h1>
                 <Typed 
                 className="typed-text" 
                 strings={["Eat( )","Sleep( )","Code( )"]}
                 typeSpeed={30}
                 backSpeed={50}
                 loop 
                 />
                 <a href="#" className="header-button">Contact me</a>
                 
            </div>
        </div>
    )
}

export default Header
