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
import RequireAuth from "./components/requireauth/RequireAuth";
import About from "./pages/About";
import MoreInfo from "./pages/MoreInfo";

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
                    <RequireAuth >
                        <Products />
                    </ RequireAuth>
                ),
                loader: getLists,
            },
            {
                path: "products/:id",
                element: (
                    <RequireAuth >
                        <ProductDetail />
                    </RequireAuth>
                ),
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
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default router



