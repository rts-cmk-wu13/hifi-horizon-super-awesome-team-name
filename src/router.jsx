import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import { getList, getLists } from "./utilities/typicode";
import Loading from "./components/loading/Loading";
import { ErrorBoundary } from "./components/error/ErrorBoundary";
import Layout from "./Layout";
import { handleSubmit } from "./utilities/actions";
import Login from "./pages/Login";
import About from "./pages/About";
import MoreInfo from "./pages/MoreInfo";
import FaQ from "./pages/FaQ";

 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: (
                        <Products />
                ),
                loader: getLists,
            },
            {
                path: "products/:id",

                element: (
                        <ProductDetail />
                ),

                element: <ProductDetail />,

                loader: getList,
            },
            {
                path: "contact",
                element: <Contact />,
                action: handleSubmit,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "info",
                element: <MoreInfo />
            },
            {
                path: "login",
                element: <Login />
            },
             {
                path: "faq",
                element: <FaQ />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])
 
export default router
