import branchBImg from '../../assets/images/branch_B.svg';
import branchImg from '../../assets/images/branch.svg';
import carrotBImg from '../../assets/images/carrot_B.svg';
import carrotImg from '../../assets/images/carrot.svg';
import rockBImg from '../../assets/images/rock_B.svg';
import rockImg from '../../assets/images/rock.svg';
import scarfBImg from '../../assets/images/scarf_B.svg';
import scarfImg from '../../assets/images/scarf.svg';
import snowballBImg from '../../assets/images/snowball_B.svg';
import snowballImg from'../../assets/images/snowball.svg';
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
