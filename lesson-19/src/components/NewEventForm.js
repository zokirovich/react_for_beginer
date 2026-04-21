import './NewEventForm.css'

function NewEventForm() {
	return (
		<form className='new-event-form '> 
			<label>
				<span>Event list</span>
			<input type="text" />
				<span>Event date</span>
			<input type="date" />
			</label>
			<button className='submit'>Submit</button>
		</form>
		
	)
}

export default NewEventForm