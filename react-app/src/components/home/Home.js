import React from "react";

import "./Home.css"
import SearchBar from "../searchbar/SearchBar";
import GroupFinder from "../group finder/GroupFinder";
import SplashBar from "../splash bar/SplashBar";
export default function Home(){
    return (
        <div className="DnD__Home">
            <SplashBar />

            <SearchBar/>

            <GroupFinder />

        </div>
    )
}