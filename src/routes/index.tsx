import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DetailView, HomeView, NotFoundView, ProfileView } from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    errorElement: <NotFoundView />,
  },
  {
    path: "/detail/:id",
    element: <DetailView />,
  },
  {
    path: "/profile",
    element: <ProfileView />,
    children: [
      {
        path: "my-info",
        element: <div>My Info</div>,
      },
      {
        path: "liked-events",
        element: <div>Liked Events</div>,
      }
    ]
  },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes;
