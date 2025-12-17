import { useState } from 'react';
import Category from '../../components/message/Category';
import { THEME } from '../../constants/THEME';
import Snowman from '../../components/message/Snowman';
import useGetMessages from '../../api/useGetMessages';

interface MessageItem {
  uuid: string;
  themeId: number;
  nickname: string;
}

const Message = () => {
  const [tapState, setTapState] = useState('OPEN');

  const { messages } = useGetMessages(6);

  const className =
    'message-list-bg-' + (tapState === 'OPEN' ? 'open' : 'unopen');

  return (
    <>
      <Category tapState={tapState} setTapState={setTapState} />
      <div className={className}>
        <div className="message-list-wrapper">
          {messages && messages.length > 0 ? (
            messages.map((m: MessageItem) => (
              <Snowman
                key={m.uuid}
                messageId={m.uuid}
                color={THEME[m.themeId]}
                name={m.nickname}
              />
            ))
          ) : (
            <div className="empty-message">받은 메시지가 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Message;
