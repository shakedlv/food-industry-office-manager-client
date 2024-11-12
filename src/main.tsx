import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './routes/landing-page/landing-page.tsx';
import PricingPage from './routes/pricing-page/pricing-page.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { ProtectedRoute } from './hooks/protected-route.tsx';
import Dashboard from './routes/dashboard-pages/dashboard-page/dashboard.tsx';
import Recipes from './routes/dashboard-pages/recipes/recipes.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/dashboard/recipes",
        element: <Recipes />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />

    </Auth0Provider>
  </StrictMode>,
)
