import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DetailView, HomeView, NotFoundView } from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    errorElement: <NotFoundView />,
  },
  {
    path: "/detail",
    element: <DetailView />,
  },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes;
