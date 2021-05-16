import React from 'react';

import { Container, Step, StepContainer, StepBar } from './styles';

interface IStepper {
  step: number;
}

const steps = Array.from({ length: 4 }, (v, i) => i + 1);

const Stepper: React.FC<IStepper> = ({ step }) => {
  return (
    <Container>
      {steps.map(s => (
        <StepContainer key={s + step * 2}>
          <Step key={s + step} $step={step >= s}>
            {s}
          </Step>
          {s !== 4 && <StepBar key={s} $step={step >= s} />}
        </StepContainer>
      ))}
    </Container>
  );
};

export default Stepper;
