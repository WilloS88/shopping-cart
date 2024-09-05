import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { CartPage } from "./pages/CartPage";

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
