import Button from './common/Button';
import ShareButton from './home/ShareButton';
import Header from './common/Header';

const ComponentExample = () => {
  return (
    <>
      {/* 버튼 사용 예시 */}
      <Button type="large">눈사람 만들기</Button>
      <Button type="disabled">재료를 모두 모아주세요</Button>
      <Button type="small">중복 확인</Button>
      <Button type="blue">선물하러 가기</Button>

      <ShareButton type="kakao" />
      <ShareButton type="link" />

      <Header 
        center='편지지 선택'
        back={true}
        close={true}
      />
    </>
  );
};

export default ComponentExample;
