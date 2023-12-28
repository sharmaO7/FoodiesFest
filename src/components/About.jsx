import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>Hello React!</h1>
            <h2>About React!</h2>
            <User name={"oneAboveAll"} />
            <UserClass name={"noOne"} />
        </div>
    );
};

export default About;