import { useState } from 'react'
import './App.css'
import Title from "./components/Title"
function App() {
// useState
  const [name, setName] = useState('Shokir')

  const [events,setEvents] = useState([
    {title:'shokir`s birthday',id: '1'}, 
    {title:'farrux live stream',id: '2'},
    {title:'match: manchester united vs barcelona',id: '3'},
  ])
  
// showContent
 const [showContent, setShowContent] = useState(true)
  // handle delete function
  const hanleDelete = (id) => {
    setEvents(events.filter((event) => {
      return event.id !== id
        
   }))
  } 

  const handleClick = () => {
   setName('Farrux')
   
  }
  return (
    
    <div className="App">
      <Title />
      <h2>My name is {name}</h2>
      <button onClick={handleClick}>Change name</button>
      <br />
      <br />
      <hr />
      {showContent && <button onClick={() => setShowContent (false)}>Hide Content</button>}
      {!showContent && <button onClick={() => setShowContent (true)}>Show Content</button>}        
      {showContent &&
        <div>
          {events.length === 0 && <h2> Not Content :( </h2>} {
         showContent && events.map((event) => {
            return (
              <div>
                <h2>{event.title.charAt(0).toUpperCase()+ event.title.slice(1).toLowerCase()}</h2>
                <button onClick={() => hanleDelete(event.id)}>delete</button>
              </div> 
            )
          })
        }
        </div>
      }

    </div>
  );
}

export default App;