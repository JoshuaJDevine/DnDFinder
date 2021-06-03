import React from "react";
import {createNewGroup} from "../../store/group";
import {useDispatch, useSelector} from "react-redux";

import "./CreateNewGroupForm.css"
export default function CreateNewGroupForm({setShowModal}){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

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
        //Add more validation errors
        if (name.length > 40) {
            let newErrors = errors;
            newErrors.push("Playlist name should be 40 characters or less.")
            setErrors(newErrors);
        }
        if (maxPartySize > 8 || maxPartySize < 3){
            let newErrors = errors;
            newErrors.push("Currently support for party size is between 3-8 players.")
            setErrors(newErrors);
        }
        else {
            await dispatch(createNewGroup(
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
          ));
            setShowModal(false);
        }
    }

    return (
        <div className='DnD__CreateNewGroupForm'>
            <form onSubmit={handleSubmit}>
                <div className='DnD_Errors'>
                    {errors.map((error, idx) => <p key={idx}>{error}</p>)}
                </div>

                {/*------------------------------------------------------*/}
                {/*NAME*/}
                {/*------------------------------------------------------*/}
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

                {/*------------------------------------------------------*/}
                {/*DETAILS*/}
                {/*------------------------------------------------------*/}
                <label htmlFor='details'>
                    Name
                </label>
                <textarea
                    id='details'
                    type="text"
                    value={detail}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                {/*------------------------------------------------------*/}
                {/*where*/}
                {/*------------------------------------------------------*/}
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


                {/*------------------------------------------------------*/}
                {/*Module*/}
                {/*------------------------------------------------------*/}
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

                {/*------------------------------------------------------*/}
                {/*Day of Week*/}
                {/*------------------------------------------------------*/}
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

                {/*------------------------------------------------------*/}
                {/*Start Time*/}
                {/*------------------------------------------------------*/}
                <label htmlFor='startTime'>
                    Start time
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

                {/*------------------------------------------------------*/}
                {/*End Time*/}
                {/*------------------------------------------------------*/}
                <label htmlFor='endTime'>
                    End time
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

                {/*------------------------------------------------------*/}
                {/*Time of Day*/}
                {/*------------------------------------------------------*/}
                <label htmlFor='timeOfDay'>
                    Time Of Day
                </label>
                <select required value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
                    <option value="PM">PM</option>
                    <option value="AM">AM</option>
                </select>

                {/*------------------------------------------------------*/}
                {/*Time Zone*/}
                {/*------------------------------------------------------*/}
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

                {/*------------------------------------------------------*/}
                {/*Time Zone*/}
                {/*------------------------------------------------------*/}
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

                {/*------------------------------------------------------*/}
                {/*SUBMIT*/}
                {/*------------------------------------------------------*/}
                <button type="submit">Create</button>
            </form>
        </div>
    )
}