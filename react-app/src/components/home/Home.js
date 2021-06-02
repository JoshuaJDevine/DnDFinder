import React from "react";

import "./Home.css"
import SearchBar from "../searchbar/SearchBar";
import GroupFinder from "../group finder/GroupFinder";
export default function Home(){
    return (
        <div className="DnD__Home">
            <div className="DnD__Home--Splash">
                <div className="DnD__Home--Title">
                    <h1>Find your next adventure</h1>
                </div>
                <div className="DnD__Home--subTitle">
                    <p>9 new groups</p>
                    <p>🐉</p>
                    <p>379 events</p>
                </div>
            </div>

            <SearchBar/>

            <GroupFinder />

        </div>
    )
}