import { useEffect, useState } from "react";
import Home from "./Home";
import Login from '../Login';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);


    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;