import ShareButton from './ShareButton';

const ShareGroup = () => {
  return (
    <div className="share-group">
      <div className="my-home__share-text">친구에게 공유하고 재료 받기</div>
      <div className="my-home__share-icons">
        <ShareButton type="link" />
        <ShareButton type="kakao" />
      </div>
    </div>
  );
};

export default ShareGroup;
