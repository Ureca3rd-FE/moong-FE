import { useState } from 'react';
import { Funnel, Step } from '../components/common/Funnel';
// 주의: useFunnel 대신 Funnel 컴포넌트를 직접 사용하여 step 상태를 관리합니다.

const FUNNEL_STEPS = [1, 2, 3, 4];
type FunnelStep = (typeof FUNNEL_STEPS)[number];

const Guid = () => {
  const [stepState, setStepState] = useState<FunnelStep>(FUNNEL_STEPS[0]);

  const FunnelComponent = ({ children }: { children: React.ReactNode }) => (
    <Funnel steps={FUNNEL_STEPS} step={stepState}>
      {children}
    </Funnel>
  );

  const handleNext = () => {
    if (stepState === 1) setStepState(2);
    else if (stepState === 2) setStepState(3);
    else if (stepState === 3) setStepState(4);
  };

  return (
    <div>
      <FunnelComponent>
        {/* Step 컴포넌트의 name prop을 숫자로 설정합니다. */}
        <Step name={1}>
          <h2>1단계: 기본 정보 입력</h2>
          {/* setStepState를 사용하여 2단계로 이동 */}
          <button onClick={() => setStepState(2)}>결제 단계 (2)로 이동</button>
        </Step>

        <Step name={2}>
          <h2>2단계: 결제 정보 입력</h2>
          {/* setStepState를 사용하여 3단계로 이동 */}
          <button onClick={() => setStepState(3)}>정보 검토 (3)로 이동</button>
        </Step>

        <Step name={3}>
          <h2>3단계: 정보 검토</h2>
          {/* setStepState를 사용하여 4단계로 이동 */}
          <button onClick={() => setStepState(4)}>가입 완료 (4)로 이동</button>
        </Step>

        <Step name={4}>
          <h2>4단계: 가입 완료!</h2>
          <p>모든 단계가 완료되었습니다.</p>
        </Step>
      </FunnelComponent>
    </div>
  );
};

export default Guid;
