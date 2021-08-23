import { useState, useEffect } from 'react';

import './App.css';

import UserForm from './components/UserForm';
import UsersContainer from './containers/UsersContainer';
import ActivitiesContainer from './containers/ActivitiesContainer';

function App() {

  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);

  const getUsers = () => {
    fetch(`http://localhost:3000/users`)
      .then(response => response.json())
      .then(arrayUsers => setUsers(arrayUsers));
  }

  const getActivities = () => {
    fetch(`http://localhost:3000/activities`)
      .then(response => response.json())
      .then(arrayActivities => setActivities(arrayActivities));
  }


  useEffect(() => {
      getUsers()
    }, []);
  
  useEffect(() => {
    getActivities()
  }, []);


  const addUser = newUser => setUsers([...users, newUser]);
  const addActivity = newActivity => setActivities([...activities, newActivity]);


  // const [activites, setActivities] = useState([]);

  //   const getActivities = () => {
  //     fetch(`http://localhost:3000/activities`)
  //       .then(response => response.json())
  //       .then(arrayActivities => setActivities(arrayActivities));
  //   }

  //   useEffect(getActivities, []);


  const updateActivity = (activity) => {
    fetch(`http://localhost:3000/activities/${activity.id}`, {
      method: 'PATCH',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({activity})
    })
    .then(response => response.json())
    .then(
      (newActivity) => {
        this.setState({
          activities: this.state.activities.map(a => a.id === newActivity.id ? newActivity : a),
      })
    }
  )
    .catch((error) => console.error(error));
  }


  const deleteActivity = (activity) => {
    fetch(`http://localhost:3000/activities/${activity.id}`, {
      method: 'DELETE',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    // .then(console.log(`deleted ${activity.name}`))
    .catch((error) => console.log(error))
  }

  // const deleteActivity = (activity) => {
  //   console.log(activity)
  // }


  return (
    <div className="App">
      <h2>Create User</h2>
      <UserForm addUser={addUser} />

      <h2>Current Users</h2>
      <UsersContainer addActivity={addActivity} users={users} />

      {/* <h2>Create Activity</h2>
      <ActivityForm addActivity={addActivity}/> */}

      <h2>Current Activities</h2>
      <ActivitiesContainer
        activities={activities}
        deleteActivity={deleteActivity}
        updateActivity={updateActivity}
      />
    </div>
  );


}

export default App;
