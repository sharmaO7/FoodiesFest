import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.jsx";  //.jsx is optional
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//React element
// const heading=React.createElement("h1",{ id: "heading"},"hello React!");






const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
                
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",             //dynamic path
                element: <RestaurantMenu />
            },

        ],
        errorElement: <Error />,
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);