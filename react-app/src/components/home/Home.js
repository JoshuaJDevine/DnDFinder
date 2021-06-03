import React from "react";
import SearchBar from "../searchbar/SearchBar";
import GroupFinder from "../group finder/GroupFinder";
import SplashBar from "../splash bar/SplashBar";
import Footer from "../footer/Footer";
import {useSelector} from "react-redux";
// import BackgroundTester from "../utility/BackgroundTester";

import "./Home.css"

export default function Home(){

    const groups = useSelector(state => state.groupData.groups)
    console.log(groups)
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