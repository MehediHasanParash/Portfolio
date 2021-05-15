import React from 'react';

const Prices = () => {
    return (
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h3 className="heading">
                        CHOOSE A PLAN
                    </h3>
                    <h1 className="main-header">
                        Prices Plan                    </h1>
                    <p className="main-content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi eum voluptas omnis eligendi in iste error consectetur exercitationem recusandae?
                    </p>
                    <div className="commonBorder">

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="price-section">
                            <div className="priceHead">
                                Basic
                            </div>
                            <div className="priceTk"><span>$</span>50</div>
                            <ul>
                                <li>5GB Storage Space</li>
                                <li>20GB Storage Space</li>
                                <li>MongoDB Database Storage Space</li>
                                <li>100 Email Acount</li>
                                <li>10 Free Domain Name</li>
                            </ul>
                            <div className="price-btn">
                                <a href="" className="button button-outline">Purchase</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="price-section second">
                            <div className="priceHead">
                                Standard
                            </div>
                            <div className="priceTk"><span>$</span>80</div>
                            <ul>
                                <li>5GB Storage Space</li>
                                <li>20GB Storage Space</li>
                                <li>MongoDB Database Storage Space</li>
                                <li>100 Email Acount</li>
                                <li>10 Free Domain Name</li>
                            </ul>
                            <div className="price-btn">
                                <a href="" className="button button-smart">Purchase</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="price-section">
                            <div className="priceHead">
                                Premium
                            </div>
                            <div className="priceTk"><span>$</span>160</div>
                            <ul>
                                <li>5GB Storage Space</li>
                                <li>20GB Storage Space</li>
                                <li>MongoDB Database Storage Space</li>
                                <li>100 Email Acount</li>
                                <li>10 Free Domain Name</li>
                            </ul>
                            <div className="price-btn">
                                <a href="" className="button button-outline">Purchase</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;