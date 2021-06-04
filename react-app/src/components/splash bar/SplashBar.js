import React from "react";
import "./SplashBar.css"
import {NavLink} from "react-router-dom";

export default function SplashBar({numberOfGroups}){
    return(
        <div className="DnD__SplashBar--Splash">
            <div className="DnD__SplashBar--Title">
                <h1>Find your next adventure</h1>
            </div>
            <div className="DnD__SplashBar--subTitle">
                {numberOfGroups > 0?
                    <p>searching {numberOfGroups} groups!</p>
                    :
                    <p>Error, could not get groups</p>
                }
            </div>
            <div className="DnD__SplashBar--Options">
                <div className="glow-dark">
                    <button>All groups</button>
                </div>
                <div className="glow-dark">
                    <button>My groups</button>
                </div>
            </div>
        </div>
    )
}