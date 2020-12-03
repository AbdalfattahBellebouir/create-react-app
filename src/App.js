import React from 'react'
import Tweet from './Tweet';

function App(){

  return(
    <div className='app'>
      <Tweet name="Ahmed" message="Software Engineer" nlikes = "5000"/>
      <Tweet name="Hind" message="HR Specialist" nlikes="4000"/>
      <Tweet name="Mehdi" message="Cybersecurity Expert" nlikes="8565"/>
      <Tweet name="Sara" message="DevOps Engineer" nlikes="6000"/>
    </div>
  );
}


export default App