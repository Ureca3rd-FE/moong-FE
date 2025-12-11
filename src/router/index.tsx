import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Loading from '../components/common/Loading';
import Guide from '../pages/Guide';

const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Singup'));
const MyHome = lazy(() => import('../pages/MyHome'));
const OthersHome = lazy(() => import('../pages/OthersHome'));
const Message = lazy(() => import('../pages/Message/Message'));
const MessageDetail = lazy(() => import('../pages/Message/MessageDetail'));
const CreateMessage = lazy(() => import('../pages/Message/CreateMessage'));
const Onboard = lazy(() => import('../pages/Onboard'));
const OnboardSuccess = lazy(() => import('../pages/OnboardSuccess'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        {/* TODO: 로그인 여부에 따라 본인 홈 or 로그인 화면으로 리다이렉션하도록 */}
        <MyHome />
      </Suspense>
    ),
  },
  {
    path: 'login',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path : 'onboard',
    element : (
      <Suspense fallback = {<Loading/>}>
        <Onboard/>
      </Suspense>
    )
  },
  {
    path : 'onboardsuccess',
    element : (
      <Suspense fallback = {<OnboardSuccess/>}>
        <OnboardSuccess/>
      </Suspense>
    )
  },
  {
    path: 'signup',
    element: (
      <Suspense fallback={<Loading />}>
        <Signup />
      </Suspense>
    ),
  },

  {
    path: 'guide',
    element: (
      <Suspense fallback={<Loading />}>
        <Guide />
      </Suspense>
    ),
  },
  {
    path: '/:userId',
    element: (
      <Suspense fallback={<Loading />}>
        <OthersHome />
      </Suspense>
    ),
  },
  {
    path: '/message/write',
    element: (
      <Suspense fallback={<Loading />}>
        <CreateMessage />
      </Suspense>
    ),
  },
  {
    path: 'message',
    element: (
      <Suspense fallback={<Loading />}>
        <Message />
      </Suspense>
    ),
  },
  {
    path: 'message/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <MessageDetail />
      </Suspense>
    ),
  },

  // TODO: Design not found page
  {
    path: '*',
    element: <div>페이지를 찾을 수 없습니다 (404)</div>,
  },
]);

export default router;
