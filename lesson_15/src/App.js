import { useState } from 'react'
import './App.css'
import Hyper from './components/Hyper'
import Title from './components/Title'

import { Fragment } from 'react'
import Modal from './components/Modal'

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
      <Modal>
        {/* <h2>Shokir Samandarov telegram chanel</h2>
			  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum fugit officia et, minus perspiciatis.</p> */}
        <h2>Shokir Samandarov telegram chanel</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corrupti ea accusamus neque eum! Delectus, laboriosam minus. Eius mollitia tempora, veniam possimus repellendus ducimus nostrum eveniet similique laboriosam facere nulla magni officiis, non libero iure vitae, voluptate quae. Mollitia cumque voluptate reiciendis vero quos adipisci vitae reprehenderit sint culpa dignissimos?</p>
        <a href="">Substrice</a>
      </Modal>
    </div>
  );
}

export default App;