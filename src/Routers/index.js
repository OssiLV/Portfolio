import { lazy } from 'react';
const RegisterPage = lazy(() => import('../pages/Register/index'));
const SignInPage = lazy(() => import('../pages/SignIn/index'));
const HomePage = lazy(() => import('../pages/Home/index'));
const ProfilePage = lazy(() => import('../pages/Profile/index'));
// import RegisterPage from '../pages/Register';
// import SignInPage from '../pages/SignIn';

export const publicPage = [
    { path: '/', Component: HomePage },
    { path: '/profile', Component: ProfilePage },
    { path: '/register', Component: RegisterPage },
    { path: '/signIn', Component: SignInPage },
];

export const privatePage = [];
