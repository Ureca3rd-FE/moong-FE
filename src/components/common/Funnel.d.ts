import type { FC, ReactNode } from 'react';
type StepProps = {
    name: number;
    children: ReactNode;
};
export declare const Step: FC<StepProps>;
type FunnelProps = {
    steps: Array<number>;
    step: number;
    children: ReactNode;
};
export declare const Funnel: FC<FunnelProps>;
export declare const useFunnel: (steps: Array<number>, defaultStep: number) => readonly [FC<Omit<FunnelProps, "steps" | "step">>, import("react").Dispatch<import("react").SetStateAction<number>>, number];
export {};
