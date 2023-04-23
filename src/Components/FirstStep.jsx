import {useContext} from 'react'
import { Button, TextField } from '@material-ui/core';
import multiStepContext from '../context/StepContext'
export const FirstStep = () => {
	return (
		<div className=''>
			<div className=''>
				<TextField label='First name' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<TextField label='Last name' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<TextField label='First name' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<Button variant='contained' color='primary' onClick={}>
					Next
				</Button>
			</div>
		</div>
	);
};
