import React, {useEffect, useState} from "react";
import {createNewGroup} from "../../../../store/group";
import {useDispatch, useSelector} from "react-redux";

import "./CreateNewGroupForm.css"
export default function CreateNewGroupForm({setShowModal}){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleClose = () => {
        setShowModal(false)
    }

    //------------------------------------------------------------------
    //Form controls
    //------------------------------------------------------------------
    const [name, setName] = useState('');
    const [details, setDetails] = useState("");
    const [where, setWhere] = useState('Discord');
    const [module, setModule] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [startTime, setStartTime] = useState(7);
    const [endTime, setEndTime] = useState(10);
    const [timeOfDay, setTimeOfDay] = useState('');
    const [groupAdmin, setGroupAdmin] = useState(sessionUser.id);
    const [maxPartySize, setMaxPartySize] = useState(1);
    const [timeZone, setTimeZone] = useState('');

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        let newErrors = [];
        if (name.length > 100) {
            newErrors.push("Name should be 100 characters or less.")
            setErrors(newErrors);
        }
        if (details.length > 500){
            newErrors.push("Details should be 500 characters or less.")
            setErrors(newErrors);
        }
        if (module.length <=0){
            newErrors.push("Please select a module.")
            setErrors(newErrors);
        }
        if (dayOfWeek.length <=0){
            newErrors.push("Please select a day of the week.")
            setErrors(newErrors);
        }
        if (startTime.length <=0){
            newErrors.push("Please select a start time.")
            setErrors(newErrors);
        }
        if (endTime.length <=0){
            newErrors.push("Please select an end time.")
            setErrors(newErrors);
        }
        if (timeOfDay.length <=0){
            newErrors.push("Please select an time of day.")
            setErrors(newErrors);
        }
        if (timeZone.length <=0){
            newErrors.push("Please input a timezone.")
            setErrors(newErrors);
        }
        if (maxPartySize < 3 || maxPartySize > 8){
            newErrors.push("Currently support for party size is between 3-8 players.")
            setErrors(newErrors);
        }

        if (newErrors.length <= 0) {
            setShowModal(false)
            return await dispatch(createNewGroup(
                name,
                details,
                where,
                module,
                dayOfWeek,
                startTime,
                endTime,
                timeOfDay,
                groupAdmin,
                maxPartySize,
                timeZone,
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
        <div className='DnD__CreateNewGroupForm'>
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
                {/*NAME*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewGroupForm--ButtonGroup">
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/*------------------------------------------------------*/}
                {/*DETAILS*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewGroupForm--ButtonGroup">
                    <label htmlFor='details'>
                        Game Details
                    </label>
                    <textarea
                        id='details'
                        type="text"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                    />
                </div>

                {/*------------------------------------------------------*/}
                {/*WHERE*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewGroupForm--ButtonGroup">
                    <label htmlFor='where'>
                        Primary Platform
                    </label>
                    <select required value={where} onChange={(e) => setWhere(e.target.value)}>
                        <option value="Discord">Discord</option>
                        <option value="Roll 20">Roll 20</option>
                        <option value="DnD Beyond">DnD Beyond</option>
                        <option value="Skype">Skype</option>
                        <option value="Fantasy Grounds">Fantasy Grounds</option>
                        <option value="D20PRO">D20PRO</option>
                        <option value="Foundry">Foundry</option>
                        <option value="Tabletop Simulator">Tabletop Simulator</option>
                        <option value="Other">Other</option>
                    </select>
                </div>



                {/*------------------------------------------------------*/}
                {/*MODULE*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewGroupForm--ButtonGroup">
                    <label htmlFor='module'>
                        Module
                    </label>
                    <select required value={module} onChange={(e) => setModule(e.target.value)}>
                        <option value="Curse of Strahd">Curse of Strahd</option>
                        <option value="Out of the Abyss">Out of the Abyss</option>
                        <option value="Descent into Avernus">Descent into Avernus</option>
                        <option value="Storm King">Storm King</option>
                        <option value="Yawning Portal">Yawning Portal</option>
                        <option value="Saltmarsh">Saltmarsh</option>
                        <option value="Tomb of Annihilation">Tomb of Annihilation</option>
                        <option value="Phandelver">Phandelver</option>
                        <option value="Eberron">Eberron</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/*------------------------------------------------------*/}
                {/*DAY OF WEEK*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewGroupForm--ButtonGroup">
                    <label htmlFor='dayOfWeek'>
                        Day
                    </label>
                    <select required value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                </div>

                <div className="DnD__CreateNewGroupForm--TimeButtonGroup">
                    {/*------------------------------------------------------*/}
                    {/*Start Time*/}
                    {/*------------------------------------------------------*/}
                    <div className="DnD__CreateNewGroupForm--ButtonGroup">
                        <label htmlFor='startTime'>
                            Time:
                        </label>
                        <select required value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                        </select>
                    </div>


                    {/*------------------------------------------------------*/}
                    {/*End Time*/}
                    {/*------------------------------------------------------*/}
                    <div className="DnD__CreateNewGroupForm--ButtonGroup">
                        <label id="DnD__ENDTIMEFORM" htmlFor='endTime'>
                             -
                        </label>
                        <select required value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                        </select>
                    </div>


                    {/*------------------------------------------------------*/}
                    {/*Time of Day*/}
                    {/*------------------------------------------------------*/}
                    <div className="DnD__CreateNewGroupForm--ButtonGroup">
                        <select required value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
                            <option value="PM">PM</option>
                            <option value="AM">AM</option>
                        </select>
                    </div>
                </div>

                {/*------------------------------------------------------*/}
                {/*Time Zone*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewGroupForm--ButtonGroup">
                    <label htmlFor='timeZone'>
                        Time Zone
                    </label>
                    <input
                        id='timeZone'
                        type="text"
                        value={timeZone}
                        onChange={(e) => setTimeZone(e.target.value)}
                        required
                    />
                </div>


                {/*------------------------------------------------------*/}
                {/*Time Zone*/}
                {/*------------------------------------------------------*/}
                <div className="DnD__CreateNewGroupForm--ButtonGroup">
                    <label htmlFor='maxPartySize'>
                        Max Party Size
                    </label>
                    <input
                        id='maxPartySize'
                        type="number"
                        value={maxPartySize}
                        onChange={(e) => setMaxPartySize(e.target.value)}
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