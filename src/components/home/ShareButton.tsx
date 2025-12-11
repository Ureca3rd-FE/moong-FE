import { useEffect, useState } from 'react'; // React와 useEffect를 import 합니다.
import Kakao from '../../assets/images/kakao.svg?react';
import Link from '../../assets/images/link.svg?react';

const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY;
const TEMPLATE_ID = Number(import.meta.env.VITE_KAKAO_TEMPLATE_KEY);
const SHARE_URL = 'http://localhost:3000';

const ShareButton = ({ type }: { type: 'kakao' | 'link' }) => {
  const sendFoolMessage = () => {
    if (window.Kakao && window.Kakao.Link) {
      window.Kakao.Link.sendCustom({
        templateId: TEMPLATE_ID,
      });
    } else {
      console.error('Kakao SDK가 준비되지 않았거나 Link 모듈이 없습니다.');
    }
  };
  const [isKakaoReady, setIsKakaoReady] = useState(false);

  useEffect(() => {
    if (KAKAO_APP_KEY && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        try {
          window.Kakao.init(KAKAO_APP_KEY);
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
            navigator.clipboard.writeText(SHARE_URL);
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
          <Kakao />
        </button>
      )}
    </>
  );
};

export default ShareButton;
