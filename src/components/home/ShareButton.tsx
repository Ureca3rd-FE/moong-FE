import Kakao from '../../assets/images/kakao.svg?react';
import Link from '../../assets/images/link.svg?react';

const ShareButton = ({ type }: { type: 'kakao' | 'link' }) => {
  return (
    <>
      {type === 'link' && (
        <button className="link-share-button">
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
