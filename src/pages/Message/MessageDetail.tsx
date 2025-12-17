import Header from '../../components/common/Header';
import { THEME } from '../../constants/THEME';

const messageDetail = {
  message:
    '안녕하세요 이건 예시 편지입니다. 500자를 채우려면 얼마나 적어야할까요? 정말 모르겠네요 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 남산 위의 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려강산  대한 사람 대한으로 길이 보전하세 이렇게 적어도 겨우 300자 쯤 되는군요 500자 제한은 너무 많은 것 아닐까요? 다시한번 고민해봐야 할 것 같습니다',
  nickname: '강현우',
  isOpen: true,
  themeId: 2,
};

const MessageDetail = () => {
  const name = '박예진';
  const className = `message-background ${THEME[messageDetail.themeId]}`;

  return (
    <>
      <Header back />
      <div className="message-wrapper">
        {messageDetail.isOpen && (
          <div className={className}>
            <div className="message-content-wrapper">
              <div className="message-to">To. {name}</div>
              <div className="message-content">{messageDetail.message}</div>
              <div className="message-from">From. {messageDetail.nickname}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessageDetail;
