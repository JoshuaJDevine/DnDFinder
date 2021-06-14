import React, {useEffect, useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "./GroupViewHeader.css"
import {useDispatch, useSelector} from "react-redux";
import {authenticate} from "../../store/session";
export default function GroupViewHeader({groupData}){
    const [loaded, setLoaded] = useState(false);

    const deviantArtImages = useSelector(state => state.imageData.images);
    const [myImgNum, setMyImgNum] = useState(getRandomInt(9))
    return(
        <>
        <div className="DnD__GroupViewHeader--blur">

        </div>
        <div className="DnD__GroupViewHeader">
            <h1>{groupData.name}</h1>

            {deviantArtImages? <img src={deviantArtImages.results[myImgNum].preview.src}/> : <p>Failed to fetch imgs</p> }
            <div className="DnD__GroupViewHeader--right">
                <div>
                    <FontAwesomeIcon icon="user-friends" />
                    Party Size: {groupData.maxPartySize}
                </div>
                <div>
                    <FontAwesomeIcon icon="location-arrow" />
                    Module: {groupData.module}
                </div>
                <div>
                    <FontAwesomeIcon icon="calendar-times" />
                    Platform: {groupData.where}
                </div>
                <div>
                    <FontAwesomeIcon icon="hat-wizard" />
                    DM: user: {groupData.groupAdmin} [WIP]
                </div>
                <div>
                    <FontAwesomeIcon icon="image" />
                    <a id="DnDGroup--ImgLink" href={deviantArtImages.results[myImgNum].url} target="_blank">Image by: {deviantArtImages.results[myImgNum].author.username} </a>
                </div>
            </div>

        </div>
        </>

    )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}