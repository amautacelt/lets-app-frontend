import { useState } from "react";

export default function EditActivityForm ({ addActivity }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date_time, setDateTime] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = event => {
        event.preventDefault()

        const activityData = { name, description, location, date_time, duration }

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activityData)
        }


        fetch(`http://localhost:3000/activities`, options)
            .then(response => response.json())
            .then(addActivity);


        setName('')
        setDescription('')
        setLocation('')
        setDateTime('')
        setDuration('')
    }

    return (
        <form className="activity-form" onSubmit={handleSubmit}>
            <label htmlFor="activity-name">Edit activity name: </label>
            <input 
                type="text"
                id="activity-name"
                placeholder="activity name"
                value={name}
                onChange={event => setName(event.target.value)}
            />

            <label htmlFor="activity-description">Edit activity description: </label>
            <input 
                type="text"
                id="activity-description"
                placeholder="activity description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />

            <label htmlFor="activity-location">Enter activity location: </label>
            <input 
                type="text"
                id="activity-location"
                placeholder="activity location"
                value={location}
                onChange={event => setLocation(event.target.value)}
            />

            <label htmlFor="activity-date-time">Enter activity date and time: </label>
            <input 
                type="text"
                id="activity-date-time"
                placeholder="activity date and time"
                value={date_time}
                onChange={event => setDateTime(event.target.value)}
            />

            <label htmlFor="activity-duration">Enter activity duration: </label>
            <input 
                type="text"
                id="activity-duration"
                placeholder="activity duration"
                value={duration}
                onChange={event => setDuration(event.target.value)}
            />

            <input type="submit" value="create activity" />

        </form>
    );

}