import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import './NewEventForm.css'

function NewEventForm({ newEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetInput = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      id: uuidv4(),
    }

    newEvent(event)
    resetInput()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event list</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <span>Event date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>

      {/* <button onClick={resetInput} type='button'>Reset Input</button> */}

      {/* <br /><br />
      <hr /> */}

      <button className='subBtn'>Submit</button>

      
    </form>
  )
}

export default NewEventForm