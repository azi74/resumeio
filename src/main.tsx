
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

// If no Google Client ID is provided, render the app without Google OAuth
if (!clientID) {
  console.warn('VITE_GOOGLE_CLIENT_ID environment variable is not set. Google OAuth will be disabled.');
  createRoot(document.getElementById("root")!).render(<App />);
} else {
  createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={clientID}>
      <App />
    </GoogleOAuthProvider>
  );
}
