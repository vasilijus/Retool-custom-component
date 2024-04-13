import React from 'react';

//import './NavigationSteps.scss'; // Import your CSS or Sass file for styling

const NavigationSteps: FC = ({ steps, currentStep }) => {
  const [step, _setStep] = Retool.useStateString({ name: 'step' })
  const [index, _setIndex] = Retool.useStateString({ name: 'index' })

  return (
    <div className="navigation-steps">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? 'active' : ''}`}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default NavigationSteps;