import About from "../pages/About";
import Filiallar from "../pages/Filiallar";
import Home from "../pages/Home";
import NewsDetail from "../pages/NewsDetail";
import NewsPage from "../pages/NewsPage";
import RootPage from "../pages/RootPage";

export const ROOT = [
    {
        path: "/",
        element: <RootPage/>,
        children: [
            { index: true, element: <Home /> },
            {
                path: "/news",
                element: <NewsPage />,
            },
            {
                path: "/news/:id",
                element: <NewsDetail/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/branches",
                element: <Filiallar/>,
            },
            // {
            //     path:"wishlist",
            //     element:<WishList/>
            // }
        ],
    },
];