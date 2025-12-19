import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Category = ({ tapState, setTapState, }) => {
    const Tap = ({ children, isSelected, onClick, }) => {
        const className = 'category-' + (isSelected ? 'selected' : 'tap');
        return (_jsx("div", { className: className, onClick: onClick, children: children }));
    };
    const barClass = 'category-bar-' + (tapState === 'OPEN' ? 'left' : 'right');
    return (_jsxs("div", { className: "category-wrapper", children: [_jsxs("div", { className: "tap-wrapper", children: [_jsx(Tap, { isSelected: tapState === 'OPEN', onClick: () => setTapState('OPEN'), children: "\uC5F4\uB838\uC5B4\uC694" }), _jsx(Tap, { isSelected: tapState === 'UNOPEN', onClick: () => setTapState('UNOPEN'), children: "\uC548 \uC5F4\uB838\uC5B4\uC694" })] }), _jsx("div", { className: barClass, children: _jsx("div", { className: "line" }) })] }));
};
export default Category;
