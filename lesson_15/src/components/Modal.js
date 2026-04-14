import './Modal.css'

function Modal({children}) {

	// console.log(props)
	// console.log(props)
	return (
		<div className='modal-backdrop'> 
			<div className='modal'>
			   {children}
			</div>
		</div>
	)
}

export default Modal