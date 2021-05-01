import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <Typed
                    className="typed-text"
                    strings={["PORTFOLIO", "MEHEDI HASAN PARASH", "FRONT-END AND BACK-END DEVELOPER"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">DOWNLOAD CV</a>
            </div>    
        </div>
    );
};

export default Header;