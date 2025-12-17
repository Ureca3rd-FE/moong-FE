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
import useUserInfo from '../../api/useUserInfo';

const IngredientGroup = () => {
  const {userInfo, loading, error}= useUserInfo();

  const ingredients = [
    {
      name: '나뭇가지',
      image: branchBImg,
      count: userInfo?.ingredient?.branch,
    },
    {
      name: '당근',
      image: carrotBImg,
      count: userInfo?.ingredient?.carrot,
    },
    {
      name: '돌',
      image: rockBImg,
      count: userInfo?.ingredient?.rock,
    },
    {
      name: '눈뭉치',
      image: snowballBImg,
      count: userInfo?.ingredient?.snow,
    },
    {
      name: '목도리',
      image: scarfBImg,
      count: userInfo?.ingredient?.muffler,
    },
  ];

  return (
    <>
      <HomeGroup className="my-home__home-group-svg" />
      <div className="my-home__ingredients">
        {ingredients.map((item) => (
          <div key={item.name} className="my-home__ingredient-item">
            <div className="my-home__ingredient-image-wrapper">
              <img src={item.image} alt={item.name} />
              <span className="my-home__ingredient-badge">{item.count}</span>
            </div>
            <span className="my-home__ingredient-name">{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default IngredientGroup;
