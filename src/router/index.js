import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../components/common/Loading';
import Guide from '../pages/Guide';
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Singup'));
const MyHome = lazy(() => import('../pages/MyHome'));
const OthersHome = lazy(() => import('../pages/OthersHome'));
const NicknameInput = lazy(() => import('../pages/NicknameInput'));
const SelectTheme = lazy(() => import('../pages/SelectTheme'));
const Message = lazy(() => import('../pages/Message/Message'));
const MessageDetail = lazy(() => import('../pages/Message/MessageDetail'));
const Onboard = lazy(() => import('../pages/Onboard'));
const OnboardSuccess = lazy(() => import('../pages/OnboardSuccess'));
const InputMessage = lazy(() => import('../pages/InputMessage'));
const MessageSuccess = lazy(() => import('../pages/MessageSuccess'));
const SnowmanMessage = lazy(() => import('../pages/SnowMessage'));
const router = createBrowserRouter([
    {
        path: '/',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(MyHome, {}) })),
    },
    {
        path: 'login',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Login, {}) })),
    },
    {
        path: 'snowman',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(SnowmanMessage, {}) }))
    },
    {
        path: 'onboard',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Onboard, {}) })),
    },
    {
        path: 'onboardsuccess',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(OnboardSuccess, {}) })),
    },
    {
        path: 'signup',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Signup, {}) })),
    },
    {
        path: 'guide',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Guide, {}) })),
    },
    {
        path: 'message',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(Message, {}) })),
    },
    {
        path: 'message/:messageId',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(MessageDetail, {}) })),
    },
    {
        path: 'nicknameinput',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(NicknameInput, {}) })),
    },
    {
        path: 'selecttheme',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(SelectTheme, {}) })),
    },
    {
        path: 'inputmessage',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(InputMessage, {}) })),
    },
    {
        path: 'messagesuccess',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(MessageSuccess, {}) })),
    },
    {
        path: 'othershome',
        element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(OthersHome, {}) })),
    },
    // TODO: Design not found page
    {
        path: '*',
        element: _jsx("div", { children: "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (404)" }),
    },
]);
export default router;
