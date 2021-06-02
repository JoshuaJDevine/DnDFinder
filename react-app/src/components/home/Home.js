import React from "react";

import "./Home.css"
import SearchBar from "../searchbar/SearchBar";
import GroupFinder from "../group finder/GroupFinder";
import SplashBar from "../splash bar/SplashBar";
import BackgroundTester from "../utility/BackgroundTester";
import Footer from "../footer/Footer";
export default function Home(){
    return (
        <div className="DnD__Home">
            <SplashBar />

            <SearchBar text={"Filter 1"}/>
            <SearchBar text={"Filter 2"}/>
            <div className="GroupWrapper">
                <GroupFinder />
                <GroupFinder />
                <GroupFinder />
            </div>
            <Footer/>

            {/*<BackgroundTester/>*/}

        </div>
    )
}