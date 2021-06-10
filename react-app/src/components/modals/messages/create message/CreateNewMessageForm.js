import React, {useState} from "react";
import {createNewMessage} from "../../../../store/message";
import {useDispatch, useSelector} from "react-redux";

import "./CreateNewMessageForm.css"
export default function CreateNewMessageForm({setShowModal, groupId}){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleClose = () => {
        setShowModal(false)
    }


    //------------------------------------------------------------------
    //Form controls
    //------------------------------------------------------------------
    const [senderId, setSenderId] = useState(sessionUser.id);
    const [text, setText] = useState("");
    const [receivingGroupId, setReceivingGroupId] = useState(groupId)

    const [errors, setErrors] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        let newErrors = [];
        if (text.length < 3) {
            newErrors.push("Text should be 3 characters or more.")
            setErrors(newErrors);
        }

        if (newErrors.length <= 0) {
            setShowModal(false)
            return await dispatch(createNewMessage(
                text,
                senderId,
                receivingGroupId,
            ))
                .catch(async (res) => {
                    const data = await res;
                    if (data && data.errors) {
                        setErrors(data.errors);
                    }
                });
        }

    }
    return (
        <div className='DnD__CreateNewMessageForm'>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 ?
                    <div className='DnD_Errors'>
                        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
                    </div>
                    :
                    <>
                    </>
                }


                {/*------------------------------------------------------*/}
                {/*TEXT*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewMessageForm--ButtonGroup">
                    <label htmlFor='text'>
                        Message
                    </label>
                    <textarea
                        id='text'
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>


                {/*------------------------------------------------------*/}
                {/*SUBMIT*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__Button--glow">
                    <div className="DnD_Button--sign fx1" onClick={handleSubmit}>Create</div>
                    <div className="DnD_Button--sign fx2" onClick={handleClose}>Cancel</div>
                </div>
            </form>
        </div>
    )
}