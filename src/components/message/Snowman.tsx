import Red from '../../assets/images/snowman_red.svg?react';
import Green from '../../assets/images/snowman_green.svg?react';
import Gold from '../../assets/images/snowman_gold.svg?react';
import Silver from '../../assets/images/snowman_silver.svg?react';
import Navy from '../../assets/images/snowman_navy.svg?react';
import { useNavigate } from 'react-router-dom';

const COLOR_COMPONENTS: { [key: string]: React.ElementType } = {
  red: Red,
  green: Green,
  gold: Gold,
  silver: Silver,
  navy: Navy,
};

const Snowman = ({
  messageId,
  color,
  name,
}: {
  messageId: string;
  color: string;
  name: string;
}) => {
  const SelectedSnowman = COLOR_COMPONENTS[color];
  const className = 'snowman-name ' + color;
  const navigate = useNavigate();

  if (!SelectedSnowman) {
    console.warn(`Invalid snowman color: ${color}. Using default.`);
    return null;
  }

  return (
    <div
      className="snowman-wrapper"
      onClick={() => {
        navigate(`/message/${messageId}`);
      }}
    >
      <SelectedSnowman />
      <div className={className}>{name}</div>
    </div>
  );
};

export default Snowman;
