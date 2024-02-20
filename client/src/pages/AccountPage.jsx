import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import AccountNavigation from "./AccountNavigation";
import PlacesPage from "./PlacesPage";

export default function AccountPage() {
    const [toHomePage, setToHomePage] = useState(null);

    const { ready, user, setUser } = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setToHomePage('/');
        setUser(null);

    }

    if (!ready) {
        return 'Loading...';
    } if (ready && !user && !toHomePage) {
        return <Navigate to={'/login'} />
    }


    if (toHomePage) {
        return <Navigate to={toHomePage} />
    }

    return (

        <div>
            
        <AccountNavigation />

            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Welcome back {user.name}
                    <button onClick={logout} className="primary max-w-sm mt-2"> Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}

        </div>

    );




}