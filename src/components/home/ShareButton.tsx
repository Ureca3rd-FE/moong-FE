import Kakao from '../../assets/images/kakao.svg?react';
import Link from '../../assets/images/link.svg?react';

const ShareButton = ({ type }: { type: 'kakao' | 'link' }) => {
  return (
    <>
      {type === 'link' && (
        <button
          className="link-share-button"
          onClick={() => {
            // TODO: 배포 후 수정 필요
            navigator.clipboard.writeText('{도메인 주소}/{userId}');
          }}
        >
          <Link />
        </button>
      )}
      {type === 'kakao' && (
        <button className="kakao-share-button">
          <Kakao />
        </button>
      )}
    </>
  );
};

export default ShareButton;
