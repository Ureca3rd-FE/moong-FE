import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import { THEME } from '../../constants/THEME';
import useGetMessageDetail from '../../api/useGetMessageDetail';

const MessageDetail = () => {
  const { messageId } = useParams<{ messageId: string }>();

  const { message, loading } = useGetMessageDetail(messageId || null);

  if (loading) return null;
  if (!message)
    return <div className="message-wrapper">메시지를 찾을 수 없습니다.</div>;

  // TODO: 로그인 후 유저 정보를 저장한 후 가져오도록 수정
  const name = '박예진';
  const className = `message-background ${THEME[message.themeId]}`;

  return (
    <>
      <Header back />
      <div className="message-wrapper">
        {message.open && (
          <div className={className}>
            <div className="message-content-wrapper">
              <div className="message-to">To. {name}</div>
              <div className="message-content">{message.content}</div>
              <div className="message-from">From. {message.sendUser}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessageDetail;
