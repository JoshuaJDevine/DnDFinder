import React, {useEffect, useState} from "react";
import SearchBar from "../searchbar/SearchBar";
import GroupFinder from "../group finder/GroupFinder";
import SplashBar from "../splash bar/SplashBar";
import Footer from "../footer/Footer";
import {useSelector, useDispatch} from "react-redux";
// import BackgroundTester from "../utility/BackgroundTester";

import "./Home.css"
import {authenticate} from "../../store/session";
import {getAllGroups} from "../../store/group";

export default function Home(){
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false);
    const groups = useSelector(state => state.groupData.groups)

    //------------------------------------------------------------------------------------------------------------------
        //Current Design requires pairs of two objects sent into one GroupFinder
    //-------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        (async() => {
          await dispatch(getAllGroups());
          setLoaded(true);
        })();
    }, []);

    if (!loaded) {
        return (
            <>
                <p>Loading your content. Please wait.</p>
            </>
        );
    }

    return (

            <div className="DnD__Home">

                <SplashBar />

                <SearchBar text={"Filter 1"}/>
                <SearchBar text={"Filter 2"}/>

                {console.log(groups.length)}
                <div className="GroupWrapper">
                    <GroupFinder groupList={groups} />
                    <GroupFinder groupList={groups}/>
                    <GroupFinder groupList={groups}/>
                </div>

                <Footer/>

                {/*<BackgroundTester/>*/}

            </div>
    )
}