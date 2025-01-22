import MainLayout from '@/components/layout/MainLayout';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import AuthGuard from '@/shared/utils/auth/AuthGuard';
import GuestGuard from '@/shared/utils/auth/GuestGuard';
import { Suspense, lazy } from 'react';
import { type RouteObject } from 'react-router';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const Home = Loadable(lazy(() => import('../pages/home/Home')));
const Restaurant = Loadable(
  lazy(() => import('../pages/restaurant/Restaurant'))
);

const routes: RouteObject[] = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <Navbar />
        <MainLayout>
          <Home />
        </MainLayout>
      </AuthGuard>
    ),
  },
  {
    path: '/restaurant/:id',
    element: (
      <AuthGuard>
        <Navbar />
        <MainLayout>
          <Restaurant />
        </MainLayout>
      </AuthGuard>
    ),
  },
];

export default routes;
