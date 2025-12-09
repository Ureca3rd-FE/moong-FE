const typeToClassNameMap = {
  small: 'button-small',
  blue: 'button-large-blue',
  large: 'button-large',
  disabled: 'button-disabled',
};

const Button = ({
  type = 'large',
  children,
}: {
  type?: 'small' | 'blue' | 'large' | 'disabled';
  children: React.ReactNode;
}) => {
  const className = typeToClassNameMap[type] || 'button-large';

  return (
    <button className={className} disabled={type === 'disabled'}>
      {children}
    </button>
  );
};

export default Button;
