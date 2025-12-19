import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SnowmanLetter from "../assets/images/snowman_full_letter.svg?react";
import "../style/pages/Snowman/Snowman.scss";
const SnowmanMessage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/message');
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [navigate]);
    return (_jsxs("div", { className: "snowman", children: [_jsx(SnowmanLetter, { className: "snowman__image" }), _jsx("div", { className: "snowman__title", children: "\uB208\uC0AC\uB78C\uC774 \uD3B8\uC9C0\uB97C \uAC00\uC838\uC654\uC5B4\uC694!" })] }));
};
export default SnowmanMessage;
