import { jsx as _jsx } from "react/jsx-runtime";
import '../../style/components/textfield.scss';
const TextField = ({ type = 'text', size = 'large', placeholder, value, onChange, onKeyDown, error = false, className = '', }) => {
    const baseClass = `textfield-${size}`; // 'textfield-large' or 'textfield-medium'
    const errorClass = error ? `${baseClass}-error` : '';
    const combinedClassName = `${errorClass || baseClass} ${className}`.trim();
    return (_jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, onKeyDown: onKeyDown, className: combinedClassName }));
};
export default TextField;
