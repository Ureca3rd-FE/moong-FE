import { useState } from 'react';
import Category from '../../components/message/Category';
import { open, unopen } from '../../mock/messages';
import { THEME } from '../../constants/THEME';
import Snowman from '../../components/message/Snowman';

const Message = () => {
  const [tapState, setTapState] = useState('OPEN');
  const messages = tapState === 'OPEN' ? open : unopen;

  const className =
    'message-list-bg-' + (tapState === 'OPEN' ? 'open' : 'unopen');

  return (
    <>
      {/* TODO: 헤더 추가 */}
      <Category tapState={tapState} setTapState={setTapState} />

      <div className={className}>
        <div className="message-list-wrapper">
          {messages.map((m) => {
            return (
              <Snowman
                key={m.uuid}
                messageId={m.uuid}
                color={THEME[m.themeId]}
                name={m.nickname}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Message;
