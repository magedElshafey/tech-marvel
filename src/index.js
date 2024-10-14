import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import AppRouter from "./routes/AppRouter";
import "./languages/i18n";
import AppInitialzation from "./components/common/app/AppInitialzation";
// react query
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
      refetchOnMount: true,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <AppInitialzation />
    <AppRouter />
  </QueryClientProvider>
);
