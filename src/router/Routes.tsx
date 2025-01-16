import HomePageLayout from "@/layout/homePageLayout/HomePageLayout";
import { createBrowserRouter } from "react-router-dom";
import Testing from "@/page/testing/Testing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,

    children: [
      {
        path: "/",
        element: <Testing/>,
      },
    ],
  },
]);

export default router;
