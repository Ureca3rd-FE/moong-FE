const typeToClassNameMap = {
  small: 'button-small',
  blue: 'button-large-blue',
  large: 'button-large',
  disabled: 'button-disabled',
};

const Button = ({
  type = 'large',
  children,
  onClick,
}: {
  type?: 'small' | 'blue' | 'large' | 'disabled';
  children: React.ReactNode;
  onClick? : () => void;
}) => {
  const className = typeToClassNameMap[type] || 'button-large';

  return (
    <button className={className} 
    disabled={type === 'disabled'}
    onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
