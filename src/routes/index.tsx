import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DetailView, HomeView } from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/detail",
    element: <DetailView />,
  },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes;
