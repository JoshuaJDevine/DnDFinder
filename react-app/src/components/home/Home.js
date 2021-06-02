import React from "react";

import "./Home.css"
import SearchBar from "../searchbar/SearchBar";
import GroupFinder from "../group finder/GroupFinder";
import SplashBar from "../splash bar/SplashBar";
import BackgroundTester from "../utility/BackgroundTester";
import GroupWrapper from "../group wrapper/GroupWrapper";
import Footer from "../footer/Footer";
export default function Home(){
    return (
        <div className="DnD__Home">
            <SplashBar />

            <SearchBar text={"Filter 1"}/>
            <SearchBar text={"Filter 2"}/>

            <GroupFinder />
            <GroupFinder />
            <GroupFinder />

            <Footer/>

            {/*<BackgroundTester/>*/}

        </div>
    )
}