import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <h1>Home</h1> },
      { path: "/orders", element: <div>Orders</div> },
      { path: "/about", element: <div>About</div> },
      { path: "*", element: <h1>Page Not Found</h1> },
    ],
  },
]);
export default routes;

