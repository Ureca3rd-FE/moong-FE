import { Children, isValidElement, useState } from 'react';
import type { FC, ReactNode, ComponentProps } from 'react';

type StepProps = {
  name: number;
  children: ReactNode;
};

export const Step: FC<StepProps> = ({ children }) => {
  return <>{children}</>;
};

type FunnelProps = {
  steps: Array<number>;
  step: number;
  children: ReactNode;
};

export const Funnel: FC<FunnelProps> = ({ steps, step, children }) => {
  const validChildren = Children.toArray(children).filter(
    (child): child is React.ReactElement<StepProps> =>
      isValidElement(child) &&
      typeof (child as React.ReactElement<any>).props.name !== 'undefined' &&
      steps.includes((child as React.ReactElement<any>).props.name),
  );

  const targetStep = validChildren.find((child) => child.props.name === step);

  return <>{targetStep || null}</>;
};

export const useFunnel = (steps: Array<number>, defaultStep: number) => {
  if (steps.length === 0) {
    throw new Error('useFunnel: `steps` must contain at least one step.');
  }
  // 현재 단계(step) 상태 관리
  const [stepState, setStepState] = useState(
    steps.includes(defaultStep) ? defaultStep : steps[0],
  );

  const FunnelComponent: FC<
    Omit<ComponentProps<typeof Funnel>, 'steps' | 'step'>
  > = ({ children }) => (
    <Funnel steps={steps} step={stepState}>
      {children}
    </Funnel>
  );

  return [FunnelComponent, setStepState] as const;
};
