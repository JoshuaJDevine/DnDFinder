import React from "react";

import "./Footer.css"
export default function SocialMediaButtons(){
    return(
        <div className="button-container">
            <div onClick={()=> window.open("https://github.com/JoshuaJDevine/", "_blank")} className="glass-btn white-btn">
                <img src="https://i.imgur.com/pBRUGpH.png" alt="facebook" style={{width: '5.5em'}} />
            </div>
            <div className="glass-btn blue-btn">
                <img onClick={()=> window.open("https://www.linkedin.com/in/joshua-devine-92a11635/", "_blank")} src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="linkedIn" style={{width: '6em'}} />
            </div>
            {/*<div className="glass-btn amber-btn">*/}
            {/*    <img onClick={()=> window.open("https://soundcloud.com/divinebladestudios/", "_blank")} src="https://i.postimg.cc/tgQ1H1Rp/soundcloud.png" alt="soundcloud" style={{width: '6em'}} />*/}
            {/*</div>*/}
        </div>
    )
}