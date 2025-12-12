import type { ChangeEvent } from 'react';
import '../../style/components/textfield.scss';

interface TextFieldProps {
  type?: 'text' | 'password';
  size?: 'medium' | 'large' ;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  className?: string;
}

const TextField = ({
  type = 'text',
  size = 'large',
  placeholder,
  value,
  onChange,
  error = false,
  className = '',
}: TextFieldProps) => {
    const baseClass = `textfield-${size}`;  // 'textfield-large' or 'textfield-medium'
    const errorClass = error ? `${baseClass}-error` : '';
    const combinedClassName = `${errorClass || baseClass} ${className}`.trim();

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={combinedClassName}
    />
  );
};

export default TextField;

