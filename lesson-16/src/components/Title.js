import { Fragment } from 'react/jsx-runtime'

const Title = ({title,subText}) => {
	// console.log(props) 
	return (
		<Fragment>
			<h1 className='title'>{title}</h1>
			<p className='subTitle'>{subText}</p>
		</Fragment>
	)

}

export default Title 