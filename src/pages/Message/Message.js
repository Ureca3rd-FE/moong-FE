import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Category from '../../components/message/Category';
import { THEME } from '../../constants/THEME';
import Snowman from '../../components/message/Snowman';
import useGetMessages from '../../api/useGetMessages';
import Header from '../../components/common/Header';
const Message = () => {
    const [tapState, setTapState] = useState('OPEN');
    const { messages, loading } = useGetMessages(6);
    const bgClassName = 'message-list-bg-' + (tapState === 'OPEN' ? 'open' : 'unopen');
    if (loading)
        return null;
    return (_jsxs("div", { className: "main", children: [_jsx(Header, { back: true, text: "\uBA54\uC138\uC9C0 \uBAA9\uB85D" }), _jsx(Category, { tapState: tapState, setTapState: setTapState }), _jsx("div", { className: bgClassName, children: _jsx("div", { className: "message-list-wrapper", children: messages && messages.length > 0 ? (messages.map((m) => (_jsx(Snowman, { messageId: m.uuid, color: THEME[m.themeId], name: m.nickname }, m.uuid)))) : (_jsx("div", { className: "empty-message", children: "\uBC1B\uC740 \uBA54\uC2DC\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." })) }) })] }));
};
export default Message;
