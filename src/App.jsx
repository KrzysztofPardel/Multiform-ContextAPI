import { useState, useContext } from 'react';
import { multiStepContext } from './context/StepContext';
import { FirstStep } from './Components/FirstStep';
import { SecondStep } from './Components/SecondStep';
import { ThirdStep } from './Components/ThirdStep';
import { Stepper, StepLabel, Step } from '@material-ui/core';
const App = () => {
	const { currentStep, finalData } = useContext(multiStepContext);
	const showStep = (step) => {
		switch (step) {
			case 1:
				return <FirstStep />;
			case 2:
				return <SecondStep />;
			case 3:
				return <ThirdStep />;
		}
	};
	<div className=''>
		<header className='App-header'>
			<h3 style={{ color: 'red', textDecoration: 'underline' }}> MultiStep Form </h3>
			<div className='center-stepper'>
				<Stepper style={{ width: '18%' }} activeStep='-1' orientation='horizontal'>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
				</Stepper>
				<FirstStep />
				<SecondStep />
				<ThirdStep />
			</div>
			{showStep(currentStep)}
		</header>
	</div>;
};

export default App;
