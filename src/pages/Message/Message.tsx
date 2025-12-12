import { useState } from 'react';
import Category from '../../components/message/Category';
import { open } from '../../mock/messages';

import Snowman from '../../components/message/Snowman';

const THEME = ['red', 'green', 'gold', 'silver', 'navy'];

const Message = () => {
  const [tapState, setTapState] = useState('OPEN');

  const className =
    'message-list-bg-' + (tapState === 'OPEN' ? 'open' : 'unopen');

  return (
    <>
      {/* TODO: 헤더 추가 */}
      <Category tapState={tapState} setTapState={setTapState} />
      {/* <div className={className}>
        <Snowman color="red" name="강현우" />
      </div> */}
      <div className={className}>
        <div className="message-list-wrapper">
          {open.map((m) => {
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
