import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import '../../style/components/header/header.scss';
import Back from '../../assets/icons/Back.svg?react';
import Close from '../../assets/icons/Close.svg?react';
export const Header = ({ back, text, close }) => {
    const navigate = useNavigate();
    return (_jsxs("header", { className: "header", children: [_jsx("div", { className: "header__back", children: back &&
                    _jsx("button", { type: "button", onClick: () => navigate(-1), "aria-label": "\uB4A4\uB85C\uAC00\uAE30", children: _jsx(Back, {}) }) }), _jsx("div", { className: "header__center", children: _jsx("span", { children: text }) }), _jsx("div", { className: "header__close", children: close &&
                    _jsx("button", { type: "button", onClick: () => navigate('/'), "aria-label": "\uB2EB\uAE30", children: _jsx(Close, {}) }) })] }));
};
export default Header;
