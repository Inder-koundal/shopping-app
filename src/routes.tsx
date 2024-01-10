import {  createBrowserRouter } from "react-router-dom"
import ProductList from "./Components/Views/Products/ProductList"
import ViewProduct from "./Components/Views/ViewProduct/ViewProduct"
import ErrorPage from "./Components/Views/ErrorPage"

export const routes =  createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
  
    {
      path: "/view-product",
      element: <ViewProduct />,
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ]);

 