const TextBubble = ({ type }: { type: 'top' | 'bottom' | 'none' }) => {
  return (
    <div className="text-bubble-wrapper">
      {type === 'top' && <div className="arrow-top"></div>}
      <div className="text-bubble">재료를 모을 수 있어요</div>
      {type === 'bottom' && <div className="arrow-bottom"></div>}
    </div>
  );
};

export default TextBubble;
