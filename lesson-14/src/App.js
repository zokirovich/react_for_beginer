import { useState } from 'react'
import './App.css'
import Hyper from './components/Hyper'
import Title from './components/Title'

import { Fragment } from 'react'

// import Title from './components/Title'
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

  // bu yerda biz elementlarni keyga bog`lab ularni ishlatishni ko`rib chiqamiz
  let subText = 'All events will be here'
  let title = 'Shokir kingdom`s events'
  return (
    
    <div className="App">
      <Title title = {title} subText = {subText} />
      <Hyper titleHyper = 'HyperText Markup Language' /> 
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
              <Fragment key={event.id}>
                <h2>{event.title.charAt(0).toUpperCase()+ event.title.slice(1).toLowerCase()}</h2>
                <button onClick={() => hanleDelete(event.id)}>delete</button>
              </Fragment> 
            )
          })
        }
        </div>
      }

    </div>
  );
}

export default App;