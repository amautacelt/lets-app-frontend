export default function Activity({ activity, deleteActivity, editActivity }) {
    return(
        <div key={activity.id} className="activity-card-container">
            <div className="activity-card">
                <h2>{activity.name}</h2>
                <p>Description: {activity.description}</p>
                <p>Date and Time: {activity.date_time}</p>
                <p>Location: {activity.location}</p>
                <p>Duration: {activity.duration}</p>
                <p>Created by: {activity.user.username}</p>
            </div>

            <div className="activity-card-buttons">
                {/* <button className="update-activity-button" onClick={() => deleteActivity(activity)}>update</button> */}
                <button className="update-activity-button" onClick={() => editActivity(activity)}>update</button>
                <button className="delete-activity-button" onClick={() => deleteActivity(activity)}>delete</button>
            </div>
        </div>
    );
}