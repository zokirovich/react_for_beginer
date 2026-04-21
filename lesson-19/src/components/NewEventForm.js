import { useState } from 'react'
import './NewEventForm.css'
function NewEventForm() {
	 const [title, setTitle] = useState('')
	 const [date, setDate] = useState('')
	
	 const resetInput = () => {
		setTitle('')
		setDate('')
	 }
	return (
		<form className='new-event-form '> 
			<label>
				<span>Event list</span>
			<input type="text" onChange={(e) => {setTitle(e.target.value);
			}  } value={title}/>
				<span>Event date</span>
			<input type="date" onChange={(e) => {setDate(e.target.value);
			}} value={date}/>
			</label>
			<button onClick={resetInput} type='button'>Reset Input</button>
			<br />
			<br />
<hr />
			<button className = 'subBtn'>Submit</button>
			<p> Title: {title}</p>
			<p> Title: {date}</p>
		</form>
		
	)
}

export default NewEventForm