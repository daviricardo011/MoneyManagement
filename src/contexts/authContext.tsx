import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { userAuthenticationApiInputData, userAuthenticationApiReturn } from '../data/apiSimulations/login/loginData';
import decode from 'jwt-decode';
import loadingContext from './loadingContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

type userDataType = {
  username: string;
  name: string;
} | null
type authProviderReturns = {
  userData: userDataType;
  setUserData: Dispatch<SetStateAction<userDataType>>;
  handleSignIn: (data: { username: string, password: string }) => Promise<boolean>;
  handleSignOut: () => Promise<boolean>;
};
interface ContextProps {
  children: ReactNode;
}
const authProviderReturnsDefault: authProviderReturns = {
  userData: null,
  setUserData: () => { },
  handleSignIn: async (a) => true,
  handleSignOut: async () => true,
};
const AuthContext = createContext<authProviderReturns>(authProviderReturnsDefault);

export const AuthProvider = ({ children }: ContextProps) => {
  const { toggleLoading } = useContext(loadingContext);
  const [userData, setUserData] = useState<userDataType>(null);
  const [token, setToken] = useLocalStorage({ key: 'logged', defaultValue: null });

  const handleSignIn = async (data: { username: string, password: string }): Promise<boolean> => {
    toggleLoading();
    if (
      userAuthenticationApiInputData.username === data.username &&
      userAuthenticationApiInputData.password === data.password
    ) {
      setToken(userAuthenticationApiReturn.token);
      toggleLoading();
      return true;
    }
    else {
      alert('Falha ao realizar o Login. Dados inválidos.');
      toggleLoading();
      return false;
    }
  };

  const handleSignOut = async (): Promise<boolean> => {
    toggleLoading();
    setUserData(null);
    setToken(null);
    window.location.href = window.location.href;
    toggleLoading();
    return true;
  };

  useEffect(() => setUserData(decode(userAuthenticationApiReturn.token)), [token]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;