// import * as Style from "./styles";

import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export const HomeScreen = () => {
    const { userData, handleSignOut } = useContext(AuthContext);
    return (
        <div>
            Bem vindo, {userData?.name}
        </div>
    );
};