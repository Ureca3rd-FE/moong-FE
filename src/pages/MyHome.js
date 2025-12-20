import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from 'react-router-dom';
import useUserInfo from '../api/useUserInfo';
import usePostSnowman from '../api/usePostSnowman';
import '../style/home.scss';
import Button from '../components/common/Button';
import logo from '../assets/images/logo.svg';
import letter from '../assets/images/letter.svg';
import IngredientGroup from '../components/home/IngredientGroup';
import ShareGroup from '../components/home/ShareGroup';
import { useEffect } from 'react';
import api from '../hooks/api';
const MyHome = () => {
    const navigate = useNavigate();
    const { userInfo } = useUserInfo();
    const { makesnowman, error: snowmanerror } = usePostSnowman();
    const location = useLocation();
    useEffect(() => {
        // 1. 가이드에서 넘겨준 state가 있는지 확인
        if (location.state?.isFirstVisit) {
            const userId = Number(localStorage.getItem('userId'));
            if (userId) {
                // 2. 비동기 API 호출
                const completeFirstVisit = async () => {
                    try {
                        await api.patch(`/member/${userId}/first-visit`);
                        console.log('첫 방문 처리 완료');
                        // 3. (선택사항) 처리가 끝난 후 다시 들어왔을 때 또 실행되지 않도록 state를 비워줍니다.
                        window.history.replaceState({}, document.title);
                    }
                    catch (error) {
                        console.error('첫 방문 처리 실패:', error);
                    }
                };
                completeFirstVisit();
            }
        }
    }, [location.state]);
    const IngredientsAvailable = (userInfo?.ingredient?.branch ?? 0) >= 1 &&
        (userInfo?.ingredient?.carrot ?? 0) >= 1 &&
        (userInfo?.ingredient?.rock ?? 0) >= 1 &&
        (userInfo?.ingredient?.snow ?? 0) >= 1 &&
        (userInfo?.ingredient?.muffler ?? 0) >= 1;
    const handleMake = async () => {
        console.log('🔍 userId:', localStorage.getItem('userId'));
        console.log('🔍 userId 타입:', typeof localStorage.getItem('userId'));
        if (!IngredientsAvailable) {
            alert('재료를 모두 모아주세요');
            return;
        }
        const userId = localStorage.getItem('userId');
        console.log('🔍 가져온 userId:', userId);
        console.log('🔍 userId === null:', userId === null);
        console.log('🔍 !userId:', !userId);
        if (!userId) {
            console.log('userId가 없어서 여기로옴');
            alert('로그인정보를 찾을 수 없습니다!');
            navigate('/login');
            return;
        }
        console.log('userId가 있어서 여기로와서 API 호출 시작');
        const success = await makesnowman(Number(userId));
        if (success) {
            navigate('/snowman');
        }
        else {
            alert(snowmanerror || '눈사람 생성에 실패했습니다');
        }
    };
    return (_jsxs("div", { className: "my-home", children: [_jsxs("div", { className: "my-home__header", children: [_jsx("div", { className: "my-home__header-icon", children: _jsx("img", { src: logo, alt: "\uB85C\uACE0" }) }), _jsx("div", { className: "my-home__header-icon", onClick: () => navigate('/message'), children: _jsx("img", { src: letter, alt: "\uD3B8\uC9C0\uAE30\uB85D\uD568" }) })] }), _jsx("div", { className: "my-home__content", children: _jsxs("div", { className: "my-home__home-group", children: [_jsx(IngredientGroup, {}), _jsx("div", { className: "my-home__user-section", children: _jsxs("h1", { className: "my-home__user-name", children: [userInfo?.nickname, _jsx("span", { className: "my-home__user-name-suffix", children: "\uB2D8" })] }) })] }) }), _jsxs("div", { className: "my-home__actions", children: [_jsxs(Button, { type: IngredientsAvailable ? 'large' : 'disabled', onClick: handleMake, children: [' ', IngredientsAvailable ? '눈사람 만들기' : '재료를 모두 모아주세요'] }), _jsx(ShareGroup, {})] })] }));
};
export default MyHome;
