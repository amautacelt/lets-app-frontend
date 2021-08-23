export default function User({ user, setSelectedUser }) {

    const activitiesCreated = () => {
        return user.activities.map(activity => {
            return (
                <li className="activity-names" key={activity.id}>
                    { activity.name }
                </li>
            )
        });
    }

    return(
        <div key={user.id} className="user-card">
            <h2 onClick={() => setSelectedUser(user)}>{user.first_name} {user.last_name}</h2>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>Activities created:</p>
                <ul>
                    { activitiesCreated() }
                </ul>
            {/* <p>Activities created: {user.activity}</p> */}
        </div>
    );
}