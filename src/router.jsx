import { App } from "./Components/App/App";
import { HomePage } from "./Components/HomePage/HomePage";
import { MorePage } from "./Components/MorePage/MorePage";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import ShoppingPage from "./Components/ShoppingPage/ShoppingPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "more", element: <MorePage /> },
      { path: "products", element: <ShoppingPage /> },
      { path: "products/:name", element: <ProductPage /> },
    ],
  },
];

export default routes;
