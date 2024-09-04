import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homePage/Home";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <div>Error Page</div>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }
        ]
    },
]);

export default router