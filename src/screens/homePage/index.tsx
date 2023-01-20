// import * as Style from "./styles";

import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Sidemenu } from "../../components/sidebar";

export const HomeScreen = () => {
    const { userData, handleSignOut } = useContext(AuthContext);
    return (
        <div>
            <Sidemenu />
            Bem vindo, {userData?.name}
        </div>
    );
};