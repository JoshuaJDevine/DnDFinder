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
import GroupCard from "../group card/GroupCard";
import GroupView from "../GroupView/GroupView";

export default function Home(){
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false);
    const groups = useSelector(state => state.groupData.groups)
    const [viewingGroup, setViewingGroup] = useState(0)

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

                <SplashBar numberOfGroups={groups?.length > 0 ? groups.length : 0} />

                <SearchBar text={"Filter 1"}/>
                <SearchBar text={"Filter 2"}/>

                {/*//------------------------------------------------------------------------------------------------*/}
                {/*   //Time constraints led to a design that requires pairs of two objects sent into one GroupFinder*/}
                {/*   //You have been warned.  I recommend not looking at this code.*/}
                {/*   //For my future reference I only create a GroupFinder on evens.*/}
                {/*   //GroupFinder does more work to determine if it is the last in an uneven pair.*/}
                {/*   //Refactor later. No way this will ever cause unexpected behaviour.*/}
                {/*//------------------------------------------------------------------------------------------------*/}
                {groups && viewingGroup <= 0 ?
                <div className="DnD_GroupWrapper">
                    {groups.map((group, idx) => {
                        if (idx % 2 === 0){
                            return(
                                <GroupFinder key={idx} groupList={groups} myIdx={idx} single={groups.length % 2 !== 0 && idx+1 === groups.length} setViewingGroup={setViewingGroup} />
                            )
                        }
                    })}
                </div>
                    :
                <>
                </>
                }

                {groups && viewingGroup >= 1 ?
                    <>
                        <GroupView groupData={groups[viewingGroup-1]} />
                    </>
                    :
                    <>
                    </>
                }


                <Footer/>

                {/*<BackgroundTester/>*/}

            </div>
    )
}