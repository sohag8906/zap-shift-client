import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import Error from "../components/erroe/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path:'coverage',
          Component: Coverage,
          loader: () => fetch('/servicesCenter.json').then(res => res. json())
        },
        {
          path: 'about',
          Component: About
        },
       {
      path: '*',
     element: <Error />
     }

    ]
  },
]);