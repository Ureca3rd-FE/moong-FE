import type { ChangeEvent, KeyboardEvent } from 'react';
import '../../style/components/textfield.scss';
interface TextFieldProps {
    type?: 'text' | 'password';
    size?: 'medium' | 'large';
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    error?: boolean;
    className?: string;
}
declare const TextField: ({ type, size, placeholder, value, onChange, onKeyDown, error, className, }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export default TextField;
