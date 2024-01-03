import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state={
            // count:0,
            userInfo:{
                name: "dummy",
                location: "default",
                avatar_url:"dummy avatar ",
            },
        };
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/sharmaO7");
        const json= await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    componentDidUpdate(){
        // console.log("component did update called!");
    }

    componentWillUnmount(){
        // console.log("component will unmount called!");
    }
    


    render(){
        const {name, location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: API not able to fetch limit exceeded {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        );
    }
};

export default UserClass;