import { jsx as _jsx } from "react/jsx-runtime";
const typeToClassNameMap = {
    small: 'button-small',
    blue: 'button-large-blue',
    large: 'button-large',
    disabled: 'button-disabled',
};
const Button = ({ type = 'large', children, onClick, }) => {
    const className = typeToClassNameMap[type] || 'button-large';
    return (_jsx("button", { className: className, disabled: type === 'disabled', onClick: onClick, children: children }));
};
export default Button;
