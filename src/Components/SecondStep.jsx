import { Button, TextField } from '@material-ui/core';
export const SecondStep = () => {
	return (
		<div className=''>
			<div className=''>
				<TextField label='Email' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<TextField label='Country' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<TextField label='District' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<Button variant='contained' color='primary'>
					Back
				</Button>
				<Button variant='contained' color='primary'>
					Next
				</Button>
			</div>
		</div>
	);
};
