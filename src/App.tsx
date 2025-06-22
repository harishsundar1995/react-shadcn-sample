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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accounts" element={<AccountsLayout />}>
            <Route index element={<Profile />} />
            <Route path="security" element={<SecurityPage />} />
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<ComponentsOverview />} />
            <Route path="components/overview" element={<ComponentsOverview />} />
            <Route path="components/sign-in" element={<SignInDocs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
