import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Layout/router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Authprovider from "./Components/AuthProviter/Authprovider";
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <QueryClientProvider  client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </Authprovider>
   
  </React.StrictMode>
);
