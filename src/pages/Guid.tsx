import { useNavigate } from 'react-router-dom';
import { useFunnel, Step } from '../components/common/Funnel';
import TextBubble from '../components/guid/TextBubble';

const FUNNEL_STEPS = [1, 2, 3, 4];

const Guid = () => {
  const [FunnelComponent, setStepState, stepState] = useFunnel(
    FUNNEL_STEPS,
    FUNNEL_STEPS[0],
  );
  const navigate = useNavigate();

  function handleNext() {
    if (stepState === FUNNEL_STEPS[FUNNEL_STEPS.length - 1]) {
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
          <TextBubble type="none">재료를 모을 수 있어요 </TextBubble>
        </Step>

        <Step name={2}>
          <TextBubble type="bottom">
            재료를 모두 모으면 <br /> 눈사람을 만들 수 있어요!
          </TextBubble>
        </Step>

        <Step name={3}>
          <TextBubble type="none">
            만들어진 눈사람은 <br /> 여기서 확인할 수 있어요
          </TextBubble>
        </Step>

        <Step name={4}>
          <TextBubble type="bottom">
            재료가 부족하다면 <br /> 친구에게 요청해보세요!
          </TextBubble>
        </Step>
      </FunnelComponent>
    </div>
  );
};

export default Guid;
