import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AccountsLayout from "./pages/AccountsLayout";
import Profile from "./pages/Profile";
import SecurityPage from "./components/SecurityPage";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import DocsLayout from "./pages/DocsLayout";
import ComponentsOverview from "./pages/docs/ComponentsOverview";
import SignInDocs from "./pages/docs/SignInDocs";
import Playground from "./pages/Playground";
import { Auth0Provider } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{ redirect_uri: window.location.origin }}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/accounts" element={<AccountsLayout />}>
                <Route index element={<Profile />} />
                <Route path="security" element={<SecurityPage />} />
                <Route path="payment" element={<Payment />} />
                <Route path="orders" element={<Orders />} />
              </Route>
              <Route path="/docs" element={<DocsLayout />}>
                <Route index element={<ComponentsOverview />} />
                <Route
                  path="components/overview"
                  element={<ComponentsOverview />}
                />
                <Route path="components/sign-in" element={<SignInDocs />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Auth0Provider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
