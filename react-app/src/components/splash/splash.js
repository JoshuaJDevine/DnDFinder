import React, {useState} from "react";

import "./splash.css"
import {Modal} from "../modals/Modal";
import DemoUserForm from "../modals/users/demo user/DemoUserForm";

import LoginModalForm from "../modals/login/loginModalForm";
import SignUpModalForm from "../modals/signup/signupModal";
import Footer from "../footer/Footer";
import SocialMediaButtons from "../footer/Social Media Buttons";
export default function Splash( {setViewingGroup} ){
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignupModal, setShowSignupModal] = useState(false)

    return(
        <>
        <div className="DnD__Splash--wrapper">
            <div className="DnD__Splash">
            </div>
            <div className="DnD__Splash--header">
                <h3>DnD Group Finder</h3>
            </div>
            <div className="DnD__Splash--overlay">
                <SocialMediaButtons />
                <h2 onClick={()=> window.open("https://github.com/JoshuaJDevine/", "_blank")}>Design: Joshua Devine</h2>
            </div>

                <div className="Splash__glow">
                    <div className="pole-container">
                        <div className="pole"> </div>
                        <div className="sign-1 sign" onClick={() => setShowDemoModal(true)}>DEMO</div>
                        <div className="sign-2 sign" onClick={() => setShowLoginModal(true)}>LOGIN</div>
                        <div className="sign-3 sign" onClick={() => setShowSignupModal(true)}>SIGNUP</div>

                        {showDemoModal && (
                            <Modal onClose={() => setShowDemoModal(false)}>
                                <DemoUserForm setShowModal={setShowDemoModal} setViewingGroup={setViewingGroup}/>
                            </Modal>
                        )}
                        {showLoginModal && (
                            <Modal onClose={() => setShowLoginModal(false)}>
                                <LoginModalForm setShowModal={setShowLoginModal}/>
                            </Modal>
                        )}
                        {showSignupModal && (
                            <Modal onClose={() => setShowSignupModal(false)}>
                                <SignUpModalForm setShowModal={setShowSignupModal}/>
                            </Modal>
                        )}
                    </div>
                </div>
        </div>
        </>
    )
}