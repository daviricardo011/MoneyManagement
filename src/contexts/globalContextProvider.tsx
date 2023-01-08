import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { theme } from '../globalStyles/colors';
import { AuthProvider } from './authContext';
import { LoadingProvider } from './loadingContext';

interface GlobalContextProviderProps {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AuthProvider>{children} </AuthProvider>
      </LoadingProvider>
    </ThemeProvider>
  )
}