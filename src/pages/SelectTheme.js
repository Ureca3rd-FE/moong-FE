import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import { useState } from "react";
import WritingGold from '../assets/images/writing_gold.svg?react';
import WritingGreen from '../assets/images/writing_green.svg?react';
import WritingNavy from '../assets/images/writing_navy.svg?react';
import WritingRed from '../assets/images/writing_red.svg?react';
import WritingSilver from '../assets/images/writing_silver.svg?react';
import RedOpen from '../assets/images/letter_red_open.svg';
import RedClose from '../assets/images/letter_red_close.svg';
import GoldOpen from '../assets/images/letter_gold_open.svg';
import GoldClose from '../assets/images/letter_gold_close.svg';
import GreenOpen from '../assets/images/letter_green_open.svg';
import GreenClose from '../assets/images/letter_green_close.svg';
import SilverOpen from '../assets/images/letter_silver_open.svg';
import SilverClose from '../assets/images/letter_silver_close.svg';
import NavyOpen from '../assets/images/letter_navy_open.svg';
import NavyClose from '../assets/images/letter_navy_close.svg';
import Button from "../components/common/Button";
import '../style/selectTheme.scss';
const THEMES = [
    { id: 1, component: WritingRed, iconOpen: RedOpen, iconClose: RedClose },
    { id: 2, component: WritingGold, iconOpen: GoldOpen, iconClose: GoldClose },
    { id: 3, component: WritingGreen, iconOpen: GreenOpen, iconClose: GreenClose },
    { id: 4, component: WritingSilver, iconOpen: SilverOpen, iconClose: SilverClose },
    { id: 5, component: WritingNavy, iconOpen: NavyOpen, iconClose: NavyClose },
];
const SelectTheme = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { receivedName, senderName } = location.state || { receivedName: 'User', senderName: 'Me' };
    const [selectedId, setSelectedId] = useState(1);
    const currentTheme = THEMES.find(t => t.id === selectedId) || THEMES[0];
    const CurrentImage = currentTheme.component;
    const handleNext = () => {
        navigate('/inputmessage', {
            state: {
                selectedId,
                receivedName,
                senderName
            }
        });
    };
    return (_jsxs("div", { className: "selectTheme", children: [_jsx(Header, { text: "\uD14C\uB9C8 \uC120\uD0DD", back: true }), _jsxs("div", { className: "selectTheme__content", children: [_jsx("div", { className: "selectTheme__grid", children: THEMES.map((theme) => {
                            const isSelected = theme.id === selectedId;
                            return (_jsx("button", { type: "button", className: `selectTheme__item ${isSelected ? 'selectTheme__item--selected' : ''}`, onClick: () => setSelectedId(theme.id), children: _jsx("img", { src: isSelected ? theme.iconOpen : theme.iconClose, className: "theme-icon" }) }, theme.id));
                        }) }), _jsx("div", { className: "selectTheme__preview", children: _jsx("div", { className: "selectLetter", children: _jsx(CurrentImage, { width: "100%", height: "100%" }) }) }), _jsx("div", { className: "selectTheme__button", children: _jsx(Button, { type: "large", onClick: handleNext, children: "\uC804\uC1A1\uD558\uAE30" }) })] })] }));
};
export default SelectTheme;
