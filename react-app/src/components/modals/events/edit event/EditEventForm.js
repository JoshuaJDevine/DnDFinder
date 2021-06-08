import React, {useState} from "react";

import "./EditEventForm.css"
import {updateMyEvent} from "../../../../store/event";
import {useDispatch} from "react-redux";

export default function EditEventForm( {setShowModal, event, groupId}) {
    const dispatch = useDispatch()
    const handleClose = () => {
        setShowModal(false)
    }



    //------------------------------------------------------------------
    //Form controls
    //------------------------------------------------------------------
    const [name, setName] = useState(event.name);
    const [location, setLocation] = useState(event.location);
    const [dayOfWeek, setDayOfWeek] = useState(event.dayOfWeek);
    const [startTime, setStartTime] = useState(event.startTime);
    const [endTime, setEndTime] = useState(event.endTime);
    const [timeOfDay, setTimeOfDay] = useState(event.timeOfDay);
    const [notes, setNotes] = useState(event.notes);
    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        let newErrors = [];
        if (name.length > 100) {
            newErrors.push("Name should be 100 characters or less.")
            setErrors(newErrors);
        }
        if (location.length < 3){
            newErrors.push("Location should be 3 characters or more.")
            setErrors(newErrors);
        }
        if (dayOfWeek.length <= 0){
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
        if (newErrors.length <= 0) {
            setShowModal(false)
            return await dispatch(updateMyEvent(
                event.id,
                name,
                location,
                dayOfWeek,
                startTime,
                endTime,
                timeOfDay,
                notes,
                groupId,
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
        <div className='DnD__UpdateEventForm'>
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
                <label htmlFor='location'>
                    Location
                </label>
                <textarea
                    id='location'
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
                <select required value={dayOfWeek} defaultValue={event.dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
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
                <select required value={startTime} defaultValue={event.startTime} onChange={(e) => setStartTime(e.target.value)}>
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
                <select required value={endTime} defaultValue={event.endTime} onChange={(e) => setEndTime(e.target.value)}>
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
                <select required value={timeOfDay} defaultValue={event.timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
                    <option value="PM">PM</option>
                    <option value="AM">AM</option>
                </select>

                {/*------------------------------------------------------*/}
                {/*Notes*/}
                {/*------------------------------------------------------*/}
                <label htmlFor='notes'>
                    Notes
                </label>
                <input
                    id='notes'
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    required
                />

                {/*------------------------------------------------------*/}
                {/*SUBMIT*/}
                {/*------------------------------------------------------*/}
                <button type="submit">Update</button>
                <button onClick={handleClose}>Close</button>
            </form>
        </div>
    )
}