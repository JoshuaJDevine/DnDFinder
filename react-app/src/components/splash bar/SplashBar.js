import React from "react";
import "./SplashBar.css"
import CreateNewGroupModal from "../modals/groups/create group/CreateNewGroupModal";
import LogoutButton from "../auth/LogoutButton";
import {useSelector} from "react-redux";

export default function SplashBar({numberOfGroups, setViewingGroup, splashOptions}){


    const handleAllGroupsButton =async () => {
//----------------------------------------------------------------------------------------------------------------------
        // Home.js handles dispatching all groups
        // Choosing "all groups" simply resets the viewingGroup to 0
        // so home can rerender all groups
//----------------------------------------------------------------------------------------------------------------------
        setViewingGroup(-1)
    }
    return(
        <div className="DnD__SplashBar--Splash">
            <div className="DnD__SplashBar--Title">
                <h1>Find your next adventure</h1>
            </div>
            <div className="DnD__SplashBar--subTitle">
                {numberOfGroups > 0?
                    <>
                    <div className="DnD__TextWrapper">
                        <p>{splashOptions.greeting}</p>
                        <p>{splashOptions.activity}</p>
                    </div>
                    </>
                    :
                    <p>Error, could not get groups</p>
                }
            </div>
            <div className="DnD__SplashBar--Options">
                <div className="glow-dark">
                    <button onClick={handleAllGroupsButton}>All groups</button>
                </div>
                {/*<div className="glow-dark">*/}
                {/*    <button>My groups</button>*/}
                {/*</div>*/}
                {splashOptions.allowedToCreateGroup ? <CreateNewGroupModal/> : <></>}
                <LogoutButton setViewingGroup={setViewingGroup} />
            </div>
        </div>
    )
}