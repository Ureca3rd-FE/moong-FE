import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import branchBImg from '../../assets/images/branch_B.svg';
import branchImg from '../../assets/images/branch.svg';
import carrotBImg from '../../assets/images/carrot_B.svg';
import carrotImg from '../../assets/images/carrot.svg';
import rockBImg from '../../assets/images/rock_B.svg';
import rockImg from '../../assets/images/rock.svg';
import scarfBImg from '../../assets/images/scarf_B.svg';
import scarfImg from '../../assets/images/scarf.svg';
import snowballBImg from '../../assets/images/snowball_B.svg';
import snowballImg from '../../assets/images/snowball.svg';
import HomeGroup from '../../assets/images/Home_Group.svg?react';
import useUserInfo from '../../api/useUserInfo';
const IngredientGroup = () => {
    const { userInfo } = useUserInfo();
    const ingredients = [
        {
            name: '나뭇가지',
            imageActive: branchImg,
            imageInActive: branchBImg,
            count: userInfo?.ingredient?.branch,
        },
        {
            name: '당근',
            imageActive: carrotImg,
            imageInActive: carrotBImg,
            count: userInfo?.ingredient?.carrot,
        },
        {
            name: '돌',
            imageActive: rockImg,
            imageInActive: rockBImg,
            count: userInfo?.ingredient?.rock,
        },
        {
            name: '눈뭉치',
            imageActive: snowballImg,
            imageInActive: snowballBImg,
            count: userInfo?.ingredient?.snow,
        },
        {
            name: '목도리',
            imageActive: scarfImg,
            imageInActive: scarfBImg,
            count: userInfo?.ingredient?.muffler,
        },
    ];
    const getIngredientImage = (item) => {
        const count = item.count ?? 0;
        return count >= 1 ? item.imageActive : item.imageInActive;
    };
    return (_jsxs(_Fragment, { children: [_jsx(HomeGroup, { className: "my-home__home-group-svg" }), _jsx("div", { className: "my-home__ingredients", children: ingredients.map((item) => (_jsxs("div", { className: "my-home__ingredient-item", children: [_jsxs("div", { className: "my-home__ingredient-image-wrapper", children: [_jsx("img", { src: getIngredientImage(item), alt: item.name }), _jsx("span", { className: "my-home__ingredient-badge", children: item.count })] }), _jsx("span", { className: "my-home__ingredient-name", children: item.name })] }, item.name))) })] }));
};
export default IngredientGroup;
