// import { useState, useEffect } from "react";
import { useState } from "react";

export default function UserForm({ addUser }) {

    const [username, setUsername] = useState('');
    const [first_name, setFirtname] = useState('');
    const [last_name, setLastname] = useState('');
    const [age, setAge] = useState('');

    // const [selectedActivity, setSelectedActivity] = useState('');
    // const [activites, setActivities] = useState([]);

    // const getActivities = () => {
    //     fetch(`http://localhost:3000/activities`)
    //         .then(response => response.json())
    //         .then(arrayActivities => setActivities(arrayActivities));
    // }

    // useEffect(getActivities, []);

    // const renderActivityOptions = () => {
    //     return activites.map(activity => {
    //         return <option key={activity.id} value={activity.id}>{activity.name}</option>
    //     })
    // }

    const handleSubmit = event => {
        event.preventDefault()

        // const userData = { username, firstname, lastname, age, activity_id: selectedActivity }
        const userData = { username, first_name, last_name, age }

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }

        fetch(`http://localhost:3000/users`, options)
            .then(response => response.json())
            .then(addUser);

        // event.target.reset()
        setUsername('')
        setFirtname('')
        setLastname('')
        setAge('')
        // setSelectedActivity('')
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label htmlFor="user-username">Enter username: </label>
            <input 
                type="text" 
                id="user-username" 
                placeholder="username" 
                value={username}
                onChange={event => setUsername(event.target.value)}
            />

            <label htmlFor="user-firstname">Enter first name: </label>
            <input 
                type="text" 
                id="user-firstname" 
                placeholder="first name" 
                value={first_name}
                onChange={event => setFirtname(event.target.value)}
            />

            <label htmlFor="user-lastname">Enter last name: </label>
            <input 
                type="text" 
                id="user-lastname" 
                placeholder="last name" 
                value={last_name}
                onChange={event => setLastname(event.target.value)}
            />

            <label htmlFor="user-age">Enter age: </label>
            <input 
                type="number" 
                min="21" 
                id="user-age" 
                placeholder="21 and older" 
                value={age}
                onChange={event => setAge(event.target.value)}
            />

            {/* <label htmlFor="user-activity"></label>
            <select 
                id="user-activity" 
                value={selectedActivity}
                onChange={event => setSelectedActivity(event.target.value)}
            >
                <option value=''>Select an activity</option>
                {renderActivityOptions()}
            </select> */}

            <input type="submit" value="create user" />

        </form>
    );
}