import { createContext, ReactNode, useState } from 'react';

type loadingProviderReturns = {
  loading: boolean;
  toggleLoading: () => void;
};
interface ContextProps {
  children: ReactNode;
}

const LoadingProviderReturnsDefault: loadingProviderReturns = {
  loading: false,
  toggleLoading: () => { },
};

const LoadingContext = createContext<loadingProviderReturns>(LoadingProviderReturnsDefault);

export const LoadingProvider = ({ children }: ContextProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoading = () => {
    setLoading(prevState => !prevState);
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        toggleLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext;