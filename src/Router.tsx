import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { CartPage } from "./pages/CartPage";
import { LogInPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { AuthLayout } from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> }, 
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <SingleProductPage /> },
      { path: "aboutus", element: <AboutUsPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
  {
    path: "login",
    element: <AuthLayout />,
    children: [{ index: true, element: <LogInPage /> }],
  },
  {
    path: "signup",
    element: <AuthLayout />,
    children: [{ index: true, element: <SignUpPage /> }],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
