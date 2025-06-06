import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { SupabaseProvider } from './contexts/SupabaseContext';
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SupabaseProvider>
        <AuthProvider>
          <ThemeProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ThemeProvider>
        </AuthProvider>
      </SupabaseProvider>
    </BrowserRouter>
  </StrictMode>
);