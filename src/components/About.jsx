import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () =>{
    return(
        <div>
            <h1>Hello React!</h1>
            <div>
                loggedInUser
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>About React!</h2>
            <User name={"oneAboveAll"} />
            <UserClass name={"noOne"} />
        </div>
    );
};

export default About;