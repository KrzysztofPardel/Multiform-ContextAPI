import { Button, TextField } from '@material-ui/core';
export const ThirdStep = () => {
	return (
		<div className=''>
			<div className=''>
				<TextField label='City' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<TextField label='Landmark' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className=''>
				<TextField label='Postal Code' margin='normal' variant='outlined' color='secondary' />
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
