import { useState } from "react";
const User = ({name}) =>{
    const [count,setcount]=useState(0);
    return (
        <div className="user-card">
            <h1>Count={count}</h1>
            <h2>Name: {name} this is functional component</h2>
            <h3>Loc: Unknown</h3>
        </div>
    );
};

export default User;