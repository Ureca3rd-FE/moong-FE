import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TextBubble = ({ type, children, }) => {
    return (_jsxs("div", { className: "text-bubble-wrapper", children: [type === 'top' && _jsx("div", { className: "arrow-top" }), _jsx("div", { className: "text-bubble", children: children }), type === 'bottom' && _jsx("div", { className: "arrow-bottom" })] }));
};
export default TextBubble;
