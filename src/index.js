import React from "react";
import LoginPage from './pages/loginPage'
import SignupPage from './pages/signupPage'
import { AuthProvider } from './contexts/authContext'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";
import AboutUsPage from "./pages/AboutUsPage";
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000,
        refetchOnWindowFocus: false
      },
    },
  });
  
  const App = () => {
  
    
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>     
            <AuthProvider>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/about" element={<AboutUsPage />} />
              </Routes>
            </AuthProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
  
  const rootElement = createRoot(document.getElementById("root"))
  rootElement.render(<App />);
  