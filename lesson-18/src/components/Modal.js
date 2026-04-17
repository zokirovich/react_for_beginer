import ReactDOM from 'react-dom'
import './Modal.css'
function Modal({children,closeModal, isModeModal}) {

	// console.log(props)
	// console.log(props)
	return ReactDOM.createPortal((
		<div className='modal-backdrop'> 
			<div className='modal' style={{
				border: '4px solid',
				// ternary operator isModeModal true bo`lsa borderColor ni yellowgreen qil, false bo`lsa red qil 
				borderColor:isModeModal ? 'yellowgreen' : 'red',
				textAlign: 'center',
				padding: '20px',
				background: '#fff',
				width: 500,
				margin: '100px auto'
			}}>
			   {children}
				 <br />
				
				 <button  className='modal-btn' onClick={closeModal} style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				 }}>Remove click</button>
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