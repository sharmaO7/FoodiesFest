import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.jsx";  //.jsx is optional
import Body from "./components/Body.jsx"

//React element
// const heading=React.createElement("h1",{ id: "heading"},"hello React!");






const AppLayout = () => {
    return(
        <div className="app">
            < Header />
            < Body />

        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);