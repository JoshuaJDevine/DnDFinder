import React, {useState} from "react";

import "./GroupView.css"
import {useSelector} from "react-redux";
export default function GroupView({groupData}){
    const deviantArtImages = useSelector(state => state.imageData.images);
    const [myImgNum, setMyImgNum] = useState(getRandomInt(9))
    console.log(deviantArtImages.results[0].preview.src)
    return(
        <div className="DnD__GroupView">
            <img src={deviantArtImages.results[myImgNum].thumbs[1].src}  />
            <p>{groupData.name}</p>
            <p>{groupData.module}</p>

        </div>
    )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}