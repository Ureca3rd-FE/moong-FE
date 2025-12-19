import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Red from '../../assets/images/snowman_red.svg?react';
import Green from '../../assets/images/snowman_green.svg?react';
import Gold from '../../assets/images/snowman_gold.svg?react';
import Silver from '../../assets/images/snowman_silver.svg?react';
import Navy from '../../assets/images/snowman_navy.svg?react';
import { useNavigate } from 'react-router-dom';
const COLOR_COMPONENTS = {
    red: Red,
    green: Green,
    gold: Gold,
    silver: Silver,
    navy: Navy,
};
const Snowman = ({ messageId, color, name, }) => {
    const SelectedSnowman = COLOR_COMPONENTS[color];
    const className = 'snowman-name ' + color;
    const navigate = useNavigate();
    if (!SelectedSnowman) {
        console.warn(`Invalid snowman color: ${color}. Using default.`);
        return null;
    }
    return (_jsxs("div", { className: "snowman-wrapper", onClick: () => {
            navigate(`/message/${messageId}`);
        }, children: [_jsx(SelectedSnowman, {}), _jsx("div", { className: className, children: name })] }));
};
export default Snowman;
