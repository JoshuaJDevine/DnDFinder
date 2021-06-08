import React, {useState} from "react";
import {createNewEvent} from "../../../../store/event";
import {useDispatch, useSelector} from "react-redux";

import "./CreateNewEventForm.css"
export default function CreateNewEventForm({setShowModal}){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleClose = () => {
        setShowModal(false)
    }

    //------------------------------------------------------------------
    //Form controls
    //------------------------------------------------------------------
    const [name, setName] = useState('');
    const [location, setLocation] = useState("");
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [startTime, setStartTime] = useState(7);
    const [endTime, setEndTime] = useState(10);
    const [timeOfDay, setTimeOfDay] = useState('');
    const [notes, setNotes] = useState(sessionUser.id);
    const [group_id, setGroup_id] = useState(1);
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

        if (newErrors.length <= 0) {
            setShowModal(false)
            return await dispatch(createNewEvent(
                name,
                location,
                dayOfWeek,
                startTime,
                endTime,
                timeOfDay,
                notes,
                group_id
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
        <div className='DnD__CreateNewEventForm'>
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
                {/*LOCATION*/}
                {/*------------------------------------------------------*/}
                <label htmlFor='notes'>
                    location
                </label>
                <textarea
                    id='notes'
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />


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
                    Details
                </label>
                <input
                    id='maxPartySize'
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    required
                />

                {/*------------------------------------------------------*/}
                {/*SUBMIT*/}
                {/*------------------------------------------------------*/}
                <button type="submit">Create</button>
                <button onClick={handleClose}>Close</button>
            </form>
        </div>
    )
}