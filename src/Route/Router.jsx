import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import Error from "../components/erroe/Error";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivaterRoute from './PrivaterRoute';
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";


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
           path: 'rider',
           element: <PrivaterRoute> <Rider></Rider> </PrivaterRoute>
        },
        {
          path: 'send-parcel',
          element: <PrivaterRoute> <SendParcel></SendParcel> </PrivaterRoute>,
          loader: () => fetch('/servicesCenter.json').then(res => res. json())
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
  {
    path:'/',
    Component: AuthLayout,
    children: [
      {
       path:'login', 
       Component: Login
      },
      {
        path:'register',
        Component: Register
      }
    ]
  }
]);