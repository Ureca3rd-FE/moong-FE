import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Button from './common/Button';
import ShareButton from './home/ShareButton';
import Header from './common/Header';
const ComponentExample = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Button, { type: "large", children: "\uB208\uC0AC\uB78C \uB9CC\uB4E4\uAE30" }), _jsx(Button, { type: "disabled", children: "\uC7AC\uB8CC\uB97C \uBAA8\uB450 \uBAA8\uC544\uC8FC\uC138\uC694" }), _jsx(Button, { type: "small", children: "\uC911\uBCF5 \uD655\uC778" }), _jsx(Button, { type: "blue", children: "\uC120\uBB3C\uD558\uB7EC \uAC00\uAE30" }), _jsx(ShareButton, { type: "kakao" }), _jsx(ShareButton, { type: "link" }), _jsx(Header, { text: '\uD3B8\uC9C0\uC9C0 \uC120\uD0DD', back: true, close: true })] }));
};
export default ComponentExample;
