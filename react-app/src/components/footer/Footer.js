import React from "react";

import "./Footer.css"
import SocialMediaButtons from "./Social Media Buttons";
export default function Footer(){
    return(
        <div className="DnD__Footer">
            <div className="DnD__Footer--content">
                <div className="DnD__Footer--row1">
                    <h1 onClick={()=> window.open("https://github.com/JoshuaJDevine/DnDFinder", "_blank")}>Design & Code: Joshua Devine</h1>
                </div>
                <div className="DnD__Footer--row2">
                    <SocialMediaButtons />
                </div>
            </div>
            <div className="DnD__Footer--art">
                <h1 onClick={()=> window.open("https://www.deviantart.com/atomiiii/art/Inn-Of-Heroes-730116642", "_blank")}>Key Art: Lee Woo chul</h1>
                <h1 onClick={()=> window.open("https://www.deviantart.com/eddie-mendoza", "_blank")}>Splash Art: Eddie Mendoza</h1>

            </div>
        </div>
    )
}