import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('Shokir')
  const [events,setEvents] = useState([
    {title:'shokir`s birthday',id: '1'}, 
    {title:'farrux live stream',id: '2'},
    {title:'match: manchester united vs barcelona',id: '3'},
  ])

  // console.log(date)
  
  const handleClick = () => {
   setName('Farrux')
   
  }
  return (
    <div className="App">
      <h2>My name is {name}</h2>
      <button onClick={handleClick}>Click me</button>
      {
        events.map((event) => {
          return (
            <div key={event.id}>
              <h2>
                {event.title.charAt(0).toUpperCase() + event.title.slice(1).toLowerCase()}
              </h2>
            </div>
          )
        })
      }
     

    </div>
  );
}

export default App;
