import React, {useState} from 'react'
import Tweet from './Tweet';

function App(){

  const [users , setUsers] = useState([
    {name: "Ahmed", message: "Software Engineer", nlikes: "5000"},
    {name: "Hind", message: "HR Specialist", nlikes: "4000"},
    {name: "Mehdi", message: "Cybersecurity Expert", nlikes: "8565"},
    {name: "Sara", message: "DevOps Engineer", nlikes: "6000"}
  ]);

  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} nlikes={user.nlikes}/>
      ))}
    </div>
  );
}


export default App
