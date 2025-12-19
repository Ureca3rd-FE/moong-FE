import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import { THEME } from '../../constants/THEME';
import useGetMessageDetail from '../../api/useGetMessageDetail';
const MessageDetail = () => {
    const { messageId } = useParams();
    const { message, loading } = useGetMessageDetail(messageId || null);
    if (loading)
        return null;
    if (!message)
        return _jsx("div", { className: "message-wrapper", children: "\uBA54\uC2DC\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." });
    // TODO: 로그인 후 유저 정보를 저장한 후 가져오도록 수정
    const name = '박예진';
    const className = `message-background ${THEME[message.themeId]}`;
    return (_jsxs(_Fragment, { children: [_jsx(Header, { back: true }), _jsx("div", { className: "message-wrapper", children: message.open && (_jsx("div", { className: className, children: _jsxs("div", { className: "message-content-wrapper", children: [_jsxs("div", { className: "message-to", children: ["To. ", name] }), _jsx("div", { className: "message-content", children: message.content }), _jsxs("div", { className: "message-from", children: ["From. ", message.sendUser] })] }) })) })] }));
};
export default MessageDetail;
