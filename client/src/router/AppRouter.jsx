import HeaderLessLayout from "components/Layout/HeaderLessLayout/HeaderLessLayout";
import Layout from "components/Layout/Layout";
import AccountPage from "pages/AccountPage/AccountPage";
import CalculationPage from "pages/CalculationPage/CalculationPage";
import DepositPage from "pages/DepositPage/DepositPage";
import GroupPage from "pages/GroupPage/GroupPage";
import IntroPage from "pages/IntroPage/IntroPage";
import InvitationPage from "pages/InvitationPage/InvitationPage";
import LoginPage from "pages/LoginPage/LoginPage";
import MainPage from "pages/MainPage/MainPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import RegistGroupPage from "pages/RegistGroupPage/RegistGroupPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import TravelInfoPage from "pages/TravelInfoPage/TravelInfoPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/account/:groupId",
          element: <AccountPage />,
        },
        {
          path: "/group/:groupId",
          element: <GroupPage />,
        },
        {
          path: "/regist-account",
          element: <RegistGroupPage />,
        },
        {
          path: "/deposit/:groupId",
          element: <DepositPage />,
        },
        {
          path: "/travelInfo/:groupId",
          element: <TravelInfoPage />,
        },
        {
          path: "/invite/:groupId",
          element: <InvitationPage />,
        },
      ],
    },
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
        {
          path: "/calculation/:groudId",
          element: <CalculationPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
