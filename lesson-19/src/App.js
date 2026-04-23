import { useState } from 'react'
import './App.css'
import EventList from './components/EventList'
import Hyper from './components/Hyper'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm'
import Title from './components/Title'

function App() {
  const [name, setName] = useState('Shokir')
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])
  const [showContent, setShowContent] = useState(true)

  // ✅ TO‘G‘RILANGAN
  const newEvent = (event) => {
    setEvents((prev) => [...prev, event])
    setShowModal(false)
  }

  const hanleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleClick = () => {
    setName('Farrux')
  }

  let subText = 'All events will be here'
  let title = 'Shokir kingdom`s events'

  return (
    <div className="App">
      <Title title={title} subText={subText} />
      <Hyper titleHyper='HyperText Markup Language' />

      <button onClick={handleClick}>Change name</button>

      <br /><br />
      <hr />

      {showContent && (
        <button onClick={() => setShowContent(false)}>Hide Content</button>
      )}

      {!showContent && (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}

      {showContent && (
        <EventList
          events={events}
          hanleDelete={hanleDelete}
          showContent={showContent}
        />
      )}

      {showModal && (
        <Modal closeModal={closeModal} isModeModal={true}>
          <NewEventForm newEvent={newEvent} />
        </Modal>
      )}

      <br />

      <button onClick={() => setShowModal(true)}>Click add</button>
    </div>
  )
}

export default App