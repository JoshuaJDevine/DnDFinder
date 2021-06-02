import React from "react";
import "./SplashBar.css"

export default function SplashBar(){
    return(
        <div className="DnD__SplashBar--Splash">
            <div className="DnD__SplashBar--Title">
                <h1>Find your next adventure</h1>
            </div>
            <div className="DnD__SplashBar--subTitle">
                <p>9 new groups</p>
                <p>🐉</p>
                <p>379 events</p>
            </div>
        </div>
    )
}