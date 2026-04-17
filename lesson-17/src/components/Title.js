import { Fragment } from 'react/jsx-runtime'
import './Title.css'
const Title = ({title,subText}) => {
	// console.log(props) 
	return (
		
			<div className='title-block'>
			<h1 className='title'>{title}</h1>
			<br />
			<p className='subTitle'>{subText}</p>
		</div>

		
	)

}

export default Title 