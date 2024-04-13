import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
           <p></p>
        </div>
    );
};

export default UserProfile;