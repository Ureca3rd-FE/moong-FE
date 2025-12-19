import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import snowmanGood from "../assets/images/snowman_face_good.svg";
import "../style/pages/OnboardSuccess/onboardSuccess.scss";
const MessageSuccess = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "onboard-success", children: [_jsx("img", { className: "onboard-success__image", src: snowmanGood, alt: "\uAC00\uC785 \uC644\uB8CC \uB208\uC0AC\uB78C" }), _jsx("div", { className: "onboard-success__title", children: "\uBA54\uC138\uC9C0\uAC00 \uBCF4\uB0B4\uC84C\uC5B4\uC694!" }), _jsxs("div", { className: "onboard-success__subtitle", children: ["\uB098\uB3C4 \uCE5C\uAD6C\uC5D0\uAC8C \uACF5\uC720\uD558\uACE0", _jsx("br", {}), "\uB208\uC0AC\uB78C\uC744 \uB9CC\uB4E4\uC5B4 \uBCFC\uAE4C\uC694?"] }), _jsx("div", { className: "onboard-success__button", children: _jsx(Button, { type: "large", onClick: () => navigate("/signup"), children: "\uD68C\uC6D0\uAC00\uC785\uD558\uAE30" }) }), _jsxs("div", { className: "onboard__signup", children: [_jsx("span", { className: "onboard__text", children: "\uC774\uBBF8 \uAC00\uC785\uB41C \uD68C\uC6D0\uC774\uB77C\uBA74? " }), _jsx("span", { className: "onboard__link", onClick: () => navigate('/login'), children: "\uB85C\uADF8\uC778\uD558\uAE30" })] })] }));
};
export default MessageSuccess;
