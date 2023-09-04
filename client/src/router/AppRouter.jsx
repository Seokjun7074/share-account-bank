import HeaderLessLayout from "components/Layout/HeaderLessLayout/HeaderLessLayout";
import Layout from "components/Layout/Layout";
import AccountPage from "pages/AccountPage/AccountPage";
import DepositPage from "pages/DepositPage/DepositPage";
import IntroPage from "pages/IntroPage/IntroPage";
import LoginPage from "pages/LoginPage/LoginPage";
import MainPage from "pages/MainPage/MainPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import RegistAccountPage from "pages/RegistAccountPage/RegistAccountPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import TravelInfoPage from "pages/TravelInfoPage/TravelInfoPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderLessLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/intro",
          element: <IntroPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/main",
          element: <MainPage />,
        },
        {
          path: "/account/:groupId",
          element: <AccountPage />,
        },
        {
          path: "/regist-account",
          element: <RegistAccountPage />,
        },
        {
          path: "/deposit/:groupId",
          element: <DepositPage />,
        },
        {
          path: "/travelInfo/:groupId",
          element: <TravelInfoPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
