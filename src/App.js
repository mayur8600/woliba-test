import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogView from './pages/BlogView';
import Product from "./pages/Product";
import Solution from "./pages/Solution";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blogDetails",
      element: <BlogView />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/solution",
      element: <Solution />,
    },
    {
      path: "*",
      element: <Error/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
