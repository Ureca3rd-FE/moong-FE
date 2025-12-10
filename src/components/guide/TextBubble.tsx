const TextBubble = ({
  type,
  children,
}: {
  type: 'top' | 'bottom' | 'none';
  children: React.ReactNode;
}) => {
  return (
    <div className="text-bubble-wrapper">
      {type === 'top' && <div className="arrow-top"></div>}
      <div className="text-bubble">{children}</div>
      {type === 'bottom' && <div className="arrow-bottom"></div>}
    </div>
  );
};

export default TextBubble;
