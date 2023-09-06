import React from "react";
import AppRouter from "router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
