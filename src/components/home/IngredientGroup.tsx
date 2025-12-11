import branchBImg from '../../assets/images/branch_B.svg';
import carrotBImg from '../../assets/images/carrot_B.svg';
import rockBImg from '../../assets/images/rock_B.svg';
import scarfBImg from '../../assets/images/scarf_B.svg';
import snowballBImg from '../../assets/images/snowball_B.svg';
import HomeGroup from '../../assets/images/Home_Group.svg?react';

const IngredientGroup = () => {
  return (
    <>
      <HomeGroup className="my-home__home-group-svg" />
      <div className="my-home__ingredients">
        <div className="my-home__ingredient-item">
          <img src={branchBImg} alt="나뭇가지" />
          <span className="my-home__ingredient-name">나뭇가지</span>
        </div>
        <div className="my-home__ingredient-item">
          <img src={carrotBImg} alt="당근" />
          <span className="my-home__ingredient-name">당근</span>
        </div>
        <div className="my-home__ingredient-item">
          <img src={rockBImg} alt="돌" />
          <span className="my-home__ingredient-name">돌</span>
        </div>
        <div className="my-home__ingredient-item">
          <img src={snowballBImg} alt="눈뭉치" />
          <span className="my-home__ingredient-name">눈뭉치</span>
        </div>
        <div className="my-home__ingredient-item">
          <img src={scarfBImg} alt="목도리" />
          <span className="my-home__ingredient-name">목도리</span>
        </div>
      </div>
    </>
  );
};

export default IngredientGroup;
