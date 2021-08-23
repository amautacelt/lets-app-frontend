import React, { useState } from "react";
import User from "../components/User";
import ActivityForm from  '../components/ActivityForm'

export default function UsersContainer({ users, addActivity }) {

    //when we click on a user that users id will be set to state
    const [selectedUser, setSelectedUser] = useState(null)

    //after this when we submit the activity form, it will be associated with the user

    const renderUsers = () => {
        return users.map(user => <User setSelectedUser={setSelectedUser}  user={user} key={user.id}/>)
    }

    return (
        <section className="users-container">
            {renderUsers()}
            <ActivityForm addActivity={addActivity} selectedUser={selectedUser}/>
        </section>
    )
}