
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductCard from "./pages/ProductCard";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Comparison from "./pages/Comparison";
import RecentlyViewed from "./pages/RecentlyViewed";
import HowToOrder from "./pages/HowToOrder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PersonalData from "./pages/PersonalData";
import OfferAgreement from "./pages/OfferAgreement";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductCard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/recently-viewed" element={<RecentlyViewed />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/personal-data" element={<PersonalData />} />
            <Route path="/offer-agreement" element={<OfferAgreement />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;