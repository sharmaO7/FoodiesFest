import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"; //.jsx is optional
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.jsx";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import Cart from "./components/Cart.jsx";

// import { lazy } from "react";

//React element
// const heading=React.createElement("h1",{ id: "heading"},"hello React!");
//lazy loading:
const Grocery = lazy(() => import("./components/Grocery.jsx"));

const AppLayout = () => {
  //authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Vaibhav Sharma",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
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
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", //dynamic path
        element: <RestaurantMenu />,
      },
      {
        path: "/cart", 
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
