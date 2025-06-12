import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ListDetail from "./pages/ListDetail";
import Lists from "./pages/Lists";
import NotFound from "./pages/NotFound";
import { getList, getLists } from "./utilities/typicode";
import Loading from "./components/loading/Loading";
import { ErrorBoundary } from "./components/error/ErrorBoundary";
import Layout from "./Layout";
import { handleSubmit } from "./utilities/actions";
import Login from "./pages/Login";
import RequireAuth from "./components/requireauth/RequireAuth";

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
                path: "lists",
                element: (
                    <RequireAuth >
                        <Lists />
                    </ RequireAuth>
                ),
                loader: getLists,
            },
            {
                path: "lists/:id",
                element: (
                    <RequireAuth >
                        <ListDetail />
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



