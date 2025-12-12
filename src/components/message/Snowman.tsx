import Red from '../../assets/images/snowman_red.svg?react';
import Green from '../../assets/images/snowman_green.svg?react';
import Yellow from '../../assets/images/snowman_yellow.svg?react';
import Silver from '../../assets/images/snowman_silver.svg?react';
import Navy from '../../assets/images/snowman_navy.svg?react';

const COLOR_COMPONENTS: { [key: string]: React.ElementType } = {
  red: Red,
  green: Green,
  yellow: Yellow,
  silver: Silver,
  navy: Navy,
};

const Snowman = ({ color, name }: { color: string; name: string }) => {
  const SelectedSnowman = COLOR_COMPONENTS[color];

  return (
    <div className="snowman-wrapper">
      {SelectedSnowman ? <SelectedSnowman /> : null}
      <div className="snowman-name">{name}</div>
    </div>
  );
};

export default Snowman;
