import React, {useEffect, useState} from "react";
import SearchBar from "../searchbar/SearchBar";
import GroupFinder from "../group finder/GroupFinder";
import SplashBar from "../splash bar/SplashBar";
import Footer from "../footer/Footer";
import {useSelector, useDispatch} from "react-redux";
// import BackgroundTester from "../utility/BackgroundTester";

import "./Home.css"
import {getAllGroupsWithUsers} from "../../store/group";
import GroupView from "../groupview/GroupView";
import {getAllApplications} from "../../store/application";
import {getDeviantArtImages} from "../../store/deviantArt";
import uuid from "react-uuid";
import Splash from "../splash/splash";
import NavBar from "../navbar/NavBar";

export default function Home(){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [loaded, setLoaded] = useState(false);
    const groups = useSelector(state => state.groupData.groups)

    //============================================================
    // ViewingGroup can manage what home will render for the user.
    // If the user is viewing a group > 0 then show that group.
    // Otherwise we will render the filtered groups
    //===========================================================
    const [viewingGroup, setViewingGroup] = useState(0)
    const [userIsMember, setUserIsMember] = useState(false)

    useEffect(() => {
        // console.log("checking viewingGroup. Value is: ", viewingGroup)
        if (viewingGroup > 0) {
            groups[viewingGroup-1].users.map((user, idx) => {
            if (sessionUser.id === user.id){
                console.log("IsTrue");
                setUserIsMember(true)
            }
        })
    }
    }, [viewingGroup, sessionUser])

    useEffect(() => {
        (async() => {
            // await dispatch(getAllGroups());
            await dispatch(getAllGroupsWithUsers())
            await dispatch(getDeviantArtImages()).catch((err) => {console.log(err)})
            await dispatch(getAllApplications()).catch((err) => {console.log(err)})
//----------------------------------------------------------------------------------------------------------------------
            //Test block for thunks
//----------------------------------------------------------------------------------------------------------------------
            // await dispatch(getAllMessages()).catch((err)=>{console.log(err)})

            // == GET ONE GROUP ===
            // await dispatch(getOneGroup(4));

            // == GET ALL EVENTS ===
            // await dispatch(getAllEvents());

            // == GET ALL APPLICATIONS ===
            // await dispatch(getAllApplications());

            // == GET ONE APPLICATION ===
            //Testing single application dispatch --> N.B. Add the catch to make sure that errors from the server are
            //                                             handled.
            // await dispatch(getOneApplication(2)).catch((err) => {console.log(err)})
            // await dispatch(getOneApplication(1)).catch((err) => {console.log(err)})


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
                {/*Render a splash page if the viewingGroup is === -1*/}
                {!sessionUser ?
                    <>
                        <Splash setViewingGroup={setViewingGroup}/>
                    </>
                    :
                    <>
                    </>
                }





                {/*//------------------------------------------------------------------------------------------------*/}
                {/*   //Two cards belong to one GroupFinder.*/}
                {/*   //Requires GroupFinder create a pair or single if last in an uneven list*/}
                {/*   //GroupFinder does more work to determine if it is the last in an uneven pair.*/}
                {/*   //Refactor later. No way this will ever cause unexpected behaviour.*/}
                {/*   //EDIT. This is causing unexpected behaviour...*/}
                {/*//------------------------------------------------------------------------------------------------*/}

                {/*Render many filtered groups*/}
                {groups && viewingGroup === 0 && groups.length > 1 && sessionUser ?
                    <>
                        {/*Render the navbar*/}
                        <NavBar />

                        {/*Render the splash bar*/}
                        <SplashBar numberOfGroups={groups?.length > 0 ? groups.length : 0} setViewingGroup={setViewingGroup}/>

                        {/*[WIP] Render filter and search option*/}
                        <SearchBar text={"Filter 1"}/>
                        <SearchBar text={"Filter 2"}/>



                        <div className="DnD_GroupWrapper">
                            {groups.map((group, idx) => {
                                if (idx % 2 === 0){
                                    return(
                                        <GroupFinder key={uuid()} groupList={groups} myIdx={idx} single={groups.length % 2 !== 0 && idx+1 === groups.length} setViewingGroup={setViewingGroup} />
                                    )
                                }
                                else {
                                    return null
                                }
                            })}
                        </div>


                        {/*Render the footer*/}
                        <Footer/>
                    </>
                        :
                    <>
                    </>
                }

                {/*Else Render one group*/}
                {groups && viewingGroup >= 1 && sessionUser ?
                    <>
                        {/*Render the navbar*/}
                        <NavBar />

                        {/*Render the splash bar*/}
                        <SplashBar numberOfGroups={groups?.length > 0 ? groups.length : 0} setViewingGroup={setViewingGroup}/>

                        {/*[WIP] Render filter and search option*/}
                        <SearchBar text={"Filter 1"}/>
                        <SearchBar text={"Filter 2"}/>

                        <GroupView groupData={groups[viewingGroup-1]} userIsMember={userIsMember} />
                        {/*Render the footer*/}
                        <Footer/>
                    </>
                    :
                    <>
                    </>
                }





                {/*Layout Testing*/}
                {/*<BackgroundTester/>*/}
            </div>
    )
}