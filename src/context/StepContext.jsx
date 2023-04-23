import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import App from '../App';
const multiStepContext = React.createContext();
export const StepContext = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [userData, setUserData] = useState([]);
	const [finalData, setFinalData] = useState([]);
	return (
		<div className=''>
			<multiStepContext.Provider
				value={{
					currentStep,
					setCurrentStep,
					userData,
					setUserData,
					finalData,
					setFinalData,
				}}>
				<App />
			</multiStepContext.Provider>
		</div>
	);
};
