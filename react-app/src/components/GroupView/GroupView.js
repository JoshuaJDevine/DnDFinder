import React, {useEffect, useState} from "react";

import "./GroupView.css"
import {useDispatch, useSelector} from "react-redux";
import GroupViewHeader from "./GroupViewHeader";
import GroupViewDetails from "./GroupViewDetails";
import GroupViewAdminPanel from "./GroupViewAdminPanel";
import GroupViewContentEvents from "./GroupViewContentEvents";
import GroupViewContentMessages from "./GroupViewContentMessages";
import {setGroupEvents} from "../../store/event";
import GroupViewMembers from "./GroupViewMembers";
import {getOneGroup} from "../../store/group";
export default function GroupView({groupId}){
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user);
    const myGroup = useSelector(state => state.groupData.group)

    const [isLoaded, setIsLoaded] = useState(false)
    const [userIsAMember, setUserIsAMember] = useState(false)
    const [isGroupAdmin, setIsGroupAdmin] = useState(false)

    useEffect(() => {
        const getMyGroup = async () => {
            const myNewGroupData = await dispatch(getOneGroup(groupId));
            let foundMembership = false
            foundMembership = myNewGroupData.groupAdmin === sessionUser.id
            setIsGroupAdmin(foundMembership)
            if (!foundMembership){
                myNewGroupData.users.map((user, idx) => {
                if (sessionUser.id === user.id){
                    console.log("IsTrue");
                    foundMembership = true
                }
            })
            }
            setUserIsAMember(foundMembership)
            setIsLoaded(true)
        }
        getMyGroup();

        window.scrollTo(0, 0)
    }, [])


    return(
        <>

        {isLoaded ?
                <>
                <>
            <div className="DnD__GroupView">
                {isGroupAdmin ? <GroupViewAdminPanel groupId={myGroup.id} applications={myGroup.applications}/> : <> </>}
                {myGroup.users.length > 0 ? <GroupViewMembers groupMembers={myGroup.users} /> : <> </>}
                <GroupViewHeader groupData={myGroup} />
                <GroupViewDetails groupData={myGroup} />
            </div>

            {userIsAMember ?
                <div className="Dnd__GroupViewContent">
                    <GroupViewContentEvents groupData={myGroup} isGroupAdmin={isGroupAdmin} />
                    <GroupViewContentMessages groupData={myGroup}/>
                </div>
                :
                <>
                </>
                }
            </>
                </>
                :
                <>
                 <p>loading your group...</p>
                </>
        }
        </>

    )
}

