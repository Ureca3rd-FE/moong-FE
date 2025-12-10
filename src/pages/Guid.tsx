import { useFunnel, Step } from '../components/common/Funnel'; // useFunnel 추가 및 경로 수정
import TextBubble from '../components/guid/TextBubble';

const FUNNEL_STEPS = [1, 2, 3, 4];

const Guid = () => {
  const [FunnelComponent, setStepState] = useFunnel(
    FUNNEL_STEPS,
    FUNNEL_STEPS[0],
  );

  return (
    <div>
      <TextBubble type="top" />
      <br />
      <TextBubble type="bottom" />
      <TextBubble type="none" />

      <FunnelComponent>
        <Step name={1}>
          <h2>1단계: 기본 정보 입력</h2>
          <button onClick={() => setStepState(2)}>결제 단계 (2)로 이동</button>
        </Step>

        <Step name={2}>
          <h2>2단계: 결제 정보 입력</h2>
          <button onClick={() => setStepState(3)}>정보 검토 (3)로 이동</button>
        </Step>

        <Step name={3}>
          <h2>3단계: 정보 검토</h2>
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
