import React, {useState} from "react";
import {createNewApplication} from "../../../../store/application";
import {useDispatch, useSelector} from "react-redux";

import  "./CreateNewApplicationForm.css"
export default function CreateNewApplicationForm( {setShowModal, groupId, setUserHasApplied} ){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleClose = () => {
        setShowModal(false)
    }

    //------------------------------------------------------------------
    //Form controls
    //------------------------------------------------------------------
    const [groupApplicationId, setGroupApplicationId] = useState(groupId);
    const [text, setText] = useState("");
    const [userId, setUserId] = useState(sessionUser.id)

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        let newErrors = [];
        if (text.length < 3) {
            newErrors.push("You won't be accepted unless you type at least 3 letters...")
            setErrors(newErrors);
        }

        if (newErrors.length <= 0) {
            setShowModal(false)
            setUserHasApplied(true)
            return await dispatch(createNewApplication(
                text,
                groupApplicationId,
                userId,
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
        <div className='DnD__CreateNewApplicationForm'>
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
                <div className="DnD__CreateNewApplicationForm--ButtonGroup">
                    <label htmlFor='text'>
                        Application Message
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