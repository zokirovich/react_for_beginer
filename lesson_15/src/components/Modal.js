import './Modal.css'
function Modal({children,closeModal}) {

	// console.log(props)
	// console.log(props)
	// return ReactDOM.createPortal((
	// 	<div className='modal-backdrop'> 
	// 		<div className='modal'>
	// 		   {children}
	// 			 <br />
	// 			 <br />
	// 			 <button onClick={closeModal}>Remove click</button>
	// 		</div>
	// 	</div>
	// ),document.body)
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