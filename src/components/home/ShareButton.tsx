import { useEffect, useState } from 'react';
import KakaoLogo from '../../assets/images/kakao.svg?react';
import Link from '../../assets/images/link.svg?react';

const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY;
const TEMPLATE_ID = Number(import.meta.env.VITE_KAKAO_TEMPLATE_KEY);
const SHARE_URL = 'http://localhost:3000';
const userId = Number(localStorage.getItem('userId'));

// window를 any로 형변환하여 Kakao 추출 (에러 회피 핵심)
const { Kakao } = window as any;

const ShareButton = ({ type }: { type: 'kakao' | 'link' }) => {
  const sendFoolMessage = () => {
    // window.Kakao 대신 위에서 선언한 Kakao 변수 사용
    if (Kakao && Kakao.Link) {
      Kakao.Link.sendCustom({
        templateId: TEMPLATE_ID,
      });
    } else {
      console.error('Kakao SDK가 준비되지 않았거나 Link 모듈이 없습니다.');
    }
  };

  const [isKakaoReady, setIsKakaoReady] = useState(false);

  useEffect(() => {
    // window.Kakao 대신 Kakao 변수 사용
    if (KAKAO_APP_KEY && Kakao) {
      if (!Kakao.isInitialized()) {
        try {
          Kakao.init(KAKAO_APP_KEY);
        } catch (error) {
          console.error('Kakao Init Failed:', error);
          return;
        }
      }
      setIsKakaoReady(true);
    }
  }, []);

  return (
    <>
      {type === 'link' && (
        <button
          className="link-share-button"
          onClick={() => {
            navigator.clipboard.writeText(`${SHARE_URL}/home/${userId}`);
          }}
        >
          <Link />
        </button>
      )}
      {type === 'kakao' && (
        <button
          className="kakao-share-button"
          disabled={!isKakaoReady}
          onClick={sendFoolMessage}
        >
          <KakaoLogo />
        </button>
      )}
    </>
  );
};

export default ShareButton;
