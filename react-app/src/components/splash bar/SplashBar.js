import React from "react";
import "./SplashBar.css"

export default function SplashBar({numberOfGroups}){
    return(
        <div className="DnD__SplashBar--Splash">
            <div className="DnD__SplashBar--Title">
                <h1>Find your next adventure</h1>
            </div>
            <div className="DnD__SplashBar--subTitle">
                {numberOfGroups?
                    <p>searching {numberOfGroups} groups!</p>
                    :
                    <p>Error, could not get groups</p>
                }
            </div>
        </div>
    )
}