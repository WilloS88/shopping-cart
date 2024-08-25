import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { HomePage } from "./components/pages/HomePage";
import { ProductsPage } from "./components/pages/ProductsPage";
import { AboutUsPage } from "./components/pages/AboutUsPage";
import { SingleProductPage } from "./components/pages/SingleProductPage";
import { CartPage } from "./components/pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
