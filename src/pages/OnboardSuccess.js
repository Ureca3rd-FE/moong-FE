import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/common/Header";
import Button from "../components/common/Button";
import snowmanGood from "../assets/images/snowman_face_good.svg";
import "../style/pages/OnboardSuccess/onboardSuccess.scss";
const OnboardSuccess = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "onboard-success", children: [_jsx(Header, { close: true }), _jsx("img", { className: "onboard-success__image", src: snowmanGood, alt: "\uAC00\uC785 \uC644\uB8CC \uB208\uC0AC\uB78C" }), _jsx("div", { className: "onboard-success__title", children: "\uAC00\uC785 \uC644\uB8CC!" }), _jsxs("div", { className: "onboard-success__subtitle", children: ["\uC9C0\uAE08 \uBC14\uB85C \uB85C\uADF8\uC778\uD558\uACE0", _jsx("br", {}), "\uB9C8\uC74C\uC744 \uBB49\uCCD0\uBCF4\uC138\uC694!"] }), _jsx("div", { className: "onboard-success__button", children: _jsx(Button, { type: "large", onClick: () => navigate("/login"), children: "\uB85C\uADF8\uC778 \uD558\uB7EC \uAC00\uAE30" }) })] }));
};
export default OnboardSuccess;
