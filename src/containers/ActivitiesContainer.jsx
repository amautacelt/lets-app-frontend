import Activity from "../components/Activity";

export default function ActivitiesContainer({ activities, deleteActivity, updateActivity }) {

    const renderActivities = () => {
        return activities.map(activity => <Activity activity={activity} deleteActivity={deleteActivity} updateActivity={updateActivity} key={activity.id}/>)
    }

    return (
        <section className="activities-container">
            {renderActivities()}
        </section>
    )
}