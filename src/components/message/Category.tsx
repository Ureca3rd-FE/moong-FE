import { useState } from 'react';

const Category = () => {
  const [tapState, setTapState] = useState('OPEN');

  const Tap = ({
    children,
    isSelected,
    onClick,
  }: {
    children: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
  }) => {
    const className = 'category-' + (isSelected ? 'selected' : 'tap');
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  };

  const barClass = 'category-bar-' + (tapState === 'OPEN' ? 'left' : 'right');

  return (
    <>
      <div className="tap-wrapper">
        <Tap
          isSelected={tapState === 'OPEN'}
          onClick={() => setTapState('OPEN')}
        >
          열렸어요
        </Tap>
        <Tap
          isSelected={tapState === 'UNOPEN'}
          onClick={() => setTapState('UNOPEN')}
        >
          안 열렸어요
        </Tap>
      </div>
      <div className={barClass}>
        <div className="line" />
      </div>
    </>
  );
};

export default Category;
