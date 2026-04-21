import style from './EventList.module.css'
function EventList({events, hanleDelete, showContent}) {
	return (
		 <div>
          {events.length === 0 && <h2> Not Content :( </h2>} {
         showContent && events.map((event) => {
            return (
              <div className={`${style['card-list']} ` } key={event.id}>
                <h2>{event.title.charAt(0).toUpperCase()+ event.title.slice(1).toLowerCase()}</h2>
                <button onClick={() => hanleDelete(event.id)}>Delete</button>
              </div> 
            )
          })
        }
        </div>  
	)
}

export default EventList