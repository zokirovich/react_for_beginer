import './Modal.css'

function Modal({children,closeModal}) {

	// console.log(props)
	// console.log(props)
	return (
		<div className='modal-backdrop'> 
			<div className='modal'>
			   {children}
				 <br />
				 <br />
				 <button onClick={closeModal}>Remove click</button>
			</div>
		</div>
	)
}

export default Modal