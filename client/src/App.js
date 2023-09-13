import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RecoilRoot } from "recoil";
import AppRouter from "router/AppRouter";
import Spinner from "components/@common/Spinner/Spinner";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        suspense: true,
        useErrorBoundary: true,
      },
    },
  });

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Spinner />}>
          <RecoilRoot>
            <AppRouter />
            <ToastContainer
              style={{ padding: "20px", zIndex: 1000, fontWeight: "bold", marginTop: "30px" }}
              hideProgressBar={true}
            />
          </RecoilRoot>
        </Suspense>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
