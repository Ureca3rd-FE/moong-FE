import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Children, isValidElement, useState } from 'react';
export const Step = ({ children }) => {
    return _jsx(_Fragment, { children: children });
};
export const Funnel = ({ steps, step, children }) => {
    const validChildren = Children.toArray(children).filter((child) => isValidElement(child) &&
        typeof child.props.name !== 'undefined' &&
        steps.includes(child.props.name));
    const targetStep = validChildren.find((child) => child.props.name === step);
    return _jsx(_Fragment, { children: targetStep || null });
};
export const useFunnel = (steps, defaultStep) => {
    if (steps.length === 0) {
        throw new Error('useFunnel: `steps` must contain at least one step.');
    }
    // 현재 단계(step) 상태 관리
    const [stepState, setStepState] = useState(steps.includes(defaultStep) ? defaultStep : steps[0]);
    const FunnelComponent = ({ children }) => (_jsx(Funnel, { steps: steps, step: stepState, children: children }));
    return [FunnelComponent, setStepState, stepState];
};
