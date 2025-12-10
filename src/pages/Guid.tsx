import { useNavigate } from 'react-router-dom';
import { useFunnel, Step } from '../components/common/Funnel';
// import TextBubble from '../components/guid/TextBubble';

const FUNNEL_STEPS = [1, 2, 3, 4];

const Guid = () => {
  const [FunnelComponent, setStepState, stepState] = useFunnel(
    FUNNEL_STEPS,
    FUNNEL_STEPS[0],
  );
  const navigate = useNavigate();

  function handleNext() {
    if (stepState === FUNNEL_STEPS[length - 1]) {
      navigate('/');
    } else setStepState(stepState + 1);
  }
  return (
    <div>
      <div className="guid-background" onClick={handleNext}>
        <span>{stepState} / 4</span>
      </div>

      <FunnelComponent>
        <Step name={1}>
          <h2>1단계: 기본 정보 입력</h2>
        </Step>

        <Step name={2}>
          <h2>2단계: 결제 정보 입력</h2>
        </Step>

        <Step name={3}>
          <h2>3단계: 정보 검토</h2>
        </Step>

        <Step name={4}>
          <h2>4단계: 가입 완료!</h2>
        </Step>
      </FunnelComponent>
    </div>
  );
};

export default Guid;
