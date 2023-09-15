import HeaderLessLayout from "components/Layout/HeaderLessLayout/HeaderLessLayout";
import Layout from "components/Layout/Layout";
import { PATH } from "constants/path";
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
import GroupJoinPage from "pages/GroupJoinPage/GroupJoinPage";
import ExchangeMoneyPage from "pages/ExchangeMoneyPage/ExchangeMoneyPage";
import ExchangeMoneyStorePage from "pages/ExchangeMoneyStorePage/ExchangeMoneyStorePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TripResultPage from "pages/TripResultPage/TripResultPage";
import TravelingPage from "pages/TravelingPage/TravelingPage";
import TravelLogPage from "pages/TravelLogPage/TravelLogPage";
import CreateAccountPage from "pages/CreateAccountPage/CreateAccountPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderLessLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: PATH.INTRO_PAGE,
          element: <IntroPage />,
        },
        {
          path: PATH.SIGNUP_PAGE,
          element: <SignUpPage />,
        },
        {
          path: PATH.LOGIN_PAGE,
          element: <LoginPage />,
        },
      ],
    },
    {
      path: PATH.INTRO_PAGE,
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: PATH.ROOT,
          element: <MainPage />,
        },
        {
          path: PATH.ACCOUNT_PAGE(":accountNumber"),
          element: <AccountPage />,
        },
        {
          path: PATH.GROUP_PAGE(":groupId"),
          element: <GroupPage />,
        },
        {
          path: PATH.REGIST_GROUP_PAGE,
          element: <RegistGroupPage />,
        },
        {
          path: PATH.DEPOSIT_PAGE(":groupId"),
          element: <DepositPage />,
        },
        {
          path: PATH.TRAVEL_INFO_PAGE(":groupId"),
          element: <TravelInfoPage />,
        },
        {
          path: PATH.INVITATION_PAGE(":groupId"),
          element: <InvitationPage />,
        },
        {
          path: PATH.JOINGROUP_PAGE(":link"),
          element: <GroupJoinPage />,
        },
        {
          path: PATH.EXCHANGE_PAGE(":groupId"),
          element: <ExchangeMoneyPage />,
        },
        {
          path: PATH.EXCHANGE_STORE_PAGE(":groupId"),
          element: <ExchangeMoneyStorePage />,
        },
        {
          path: PATH.TRIPRESULT_PAGE(":groupId"),
          element: <TripResultPage />,
        },
        {
          path: PATH.TRAVELING_PAGE(":groupId"),
          element: <TravelingPage />,
        },
        {
          path: PATH.TRAVEL_LOG_PAGE,
          element: <TravelLogPage />,
        },
        {
          path: PATH.CREATE_ACCOUNT_PAGE,
          element: <CreateAccountPage />,
        },
        {
          path: PATH.CALCULATION_PAGE(":groupId"),
          element: <CalculationPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
