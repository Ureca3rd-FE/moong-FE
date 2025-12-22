import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '../components/common/Funnel';
import TextBubble from '../components/guide/TextBubble';
import MyHome from './MyHome';
import { useEffect } from 'react';
import IngredientGroup from '../components/home/IngredientGroup';
import Button from '../components/common/Button';
import ShareGroup from '../components/home/ShareGroup';
import Letter from '../assets/images/letter.svg?react';
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
            navigate('/', { state: { isFirstVisit: true } });
        }
        else
            setStepState(stepState + 1);
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "guide-background", onClick: handleNext }), _jsxs("span", { className: "guid-step", children: [stepState, " / 4"] }), stepState === 1 && (_jsxs("div", { className: "step-1", children: [_jsx("div", { className: "guide-focus", children: _jsx(IngredientGroup, {}) }), _jsx(TextBubble, { type: "top", children: "\uC7AC\uB8CC\uB97C \uBAA8\uC744 \uC218 \uC788\uC5B4\uC694 " })] })), stepState === 2 && (_jsxs("div", { className: "step-2", children: [_jsx("div", { className: "guide-focus", children: _jsx(Button, { children: "\uB208\uC0AC\uB78C \uB9CC\uB4E4\uAE30" }) }), _jsxs(TextBubble, { type: "bottom", children: ["\uC7AC\uB8CC\uB97C \uBAA8\uB450 \uBAA8\uC73C\uBA74 ", _jsx("br", {}), " \uB208\uC0AC\uB78C\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694!"] })] })), stepState === 3 && (_jsxs("div", { className: "step-3", children: [_jsx("div", { className: "guide-focus", children: _jsx(Letter, { height: 24, width: 24 }) }), _jsx("div", { className: "guide-line" }), _jsxs(TextBubble, { type: "none", children: ["\uB9CC\uB4E4\uC5B4\uC9C4 \uB208\uC0AC\uB78C\uC740 ", _jsx("br", {}), " \uC5EC\uAE30\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694"] })] })), stepState === 4 && (_jsxs("div", { className: "step-4", children: [_jsx("div", { className: "guide-focus", children: _jsx(ShareGroup, {}) }), _jsxs(TextBubble, { type: "bottom", children: ["\uC7AC\uB8CC\uAC00 \uBD80\uC871\uD558\uB2E4\uBA74 ", _jsx("br", {}), " \uCE5C\uAD6C\uC5D0\uAC8C \uC694\uCCAD\uD574\uBCF4\uC138\uC694!"] })] })), _jsx(MyHome, {})] }));
};
export default Guide;
