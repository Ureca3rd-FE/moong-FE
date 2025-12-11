import { useNavigate } from 'react-router-dom';
import { useFunnel } from '../components/common/Funnel';
import TextBubble from '../components/guide/TextBubble';
import MyHome from './MyHome';
import { useEffect } from 'react';
import IngredientGroup from '../components/home/IngredientGroup';
import Button from '../components/common/Button';

const FUNNEL_STEPS = [1, 2, 3, 4];

const Guide = () => {
  const [, setStepState, stepState] = useFunnel(FUNNEL_STEPS, FUNNEL_STEPS[0]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  function handleNext() {
    if (stepState === FUNNEL_STEPS[FUNNEL_STEPS.length - 1]) {
      navigate('/');
    } else setStepState(stepState + 1);
  }
  return (
    <>
      <div className="guide-background" onClick={handleNext}></div>
      <span className="guid-step">{stepState} / 4</span>

      {stepState === 1 && (
        <div className="step-1">
          <div className="guide-focus">
            <IngredientGroup />
          </div>
          <TextBubble type="top">재료를 모을 수 있어요 </TextBubble>
        </div>
      )}

      {stepState === 2 && (
        <div className="step-2">
          <div className="guide-focus">
            <Button>눈사람 만들기</Button>
          </div>
          <TextBubble type="bottom">
            재료를 모두 모으면 <br /> 눈사람을 만들 수 있어요!
          </TextBubble>
        </div>
      )}

      <MyHome />

      {/* <FunnelComponent>
        <Step name={1}></Step>

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
      </FunnelComponent> */}
    </>
  );
};

export default Guide;
