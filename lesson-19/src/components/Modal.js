import ReactDOM from 'react-dom'
import './Modal.css'
import './NewEventForm'
function Modal({children}) {

	// console.log(props)
	// console.log(props)
	return ReactDOM.createPortal((
		<div className='modal-backdrop'> 
			<div className='modal' style={{
				border: '4px solid',
				// ternary operator isModeModal true bo`lsa borderColor ni yellowgreen qil, false bo`lsa red qil 
				borderColor:'yellowgreen' ,
				textAlign: 'center',
				padding: '20px',
				background: '#fff',
				width: 500,
				margin: '100px auto'
			}}>
			   {children}
				
			</div>
		</div>
	),document.body)
	// return (
	// 	<div className='modal-backdrop'> 
	// 		<div className='modal'>
	// 		   {children}
	// 			 <br />
	// 			 <br />
	// 			 <button onClick={closeModal}>Remove click</button>
	// 		</div>
	// 	</div>
	// )
}

export default Modal