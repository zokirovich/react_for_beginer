import { useState } from 'react'
import './App.css'
import EventList from './components/EventList'
import Hyper from './components/Hyper'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm'
import Title from './components/Title'

// import Title from './components/Title'
function App() {
// useState
  const [name, setName] = useState('Shokir')
  const [showModal,setShowModal] = useState(false)
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

  // closeModal btn
  const closeModal = () => {
    setShowModal(false)
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
             <EventList events = {events}
              hanleDelete = {hanleDelete}
              showContent = {showContent} >
            </EventList>  
      }
      {showModal && <Modal closeModal = {closeModal} isModeModal = {true} >
        {/* <h2>Shokir Samandarov telegram chanel</h2>
			  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum fugit officia et, minus perspiciatis.</p> */}
        
        <NewEventForm/>
      </Modal>}
      <br />
      <button onClick={() => {setShowModal(true)}}>Click add</button>
    </div>
  );
}

export default App;