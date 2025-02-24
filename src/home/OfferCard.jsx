import React from "react";
import './home.css'


export default function OfferCard()
{
    return(
        <>
            <div className="offer-outer d-flex align-items-center justify-content-around flex-wrap ">
                    <div className="offerBox offerBox1">
                        <div className="offerboxinner text-light">
                            <h4>20% Off On Tank Tops</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button className="text-uppercase">shop now</button>
                        </div>
                    </div>
                    <div className="offerBox offerBox2">
                        <div className="offerboxinner text-light">
                            <h4>Latest Eyewear For You</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                            <button className="text-uppercase">shop now</button>
                        </div>
                    </div>
                    <div className="offerBox offerBox3">
                        <div className="offerboxinner text-light">
                            <h4>Let's Lorem Suit Up!</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.​</p>
                            <button className="text-uppercase">check out</button>
                        </div>
                    </div>
            </div>
        </>
    )
}