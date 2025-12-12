import { useState } from 'react';
import Category from '../../components/message/Category';

import Snowman from '../../components/message/Snowman';

const Message = () => {
  const [tapState, setTapState] = useState('OPEN');

  const className = 'message-list-' + (tapState === 'OPEN' ? 'open' : 'unopen');

  return (
    <>
      {/* TODO: 헤더 추가 */}
      <Category tapState={tapState} setTapState={setTapState} />
      <div className={className}>
        <Snowman color="red" name="강현우" />
      </div>
    </>
  );
};

export default Message;
