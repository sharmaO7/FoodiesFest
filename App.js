const parent=React.createElement("div",{ id: "parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"hello world!"),
        React.createElement("h2",{},"from React!"),
    ])
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);