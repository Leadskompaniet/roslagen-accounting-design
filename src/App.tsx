import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LopandeBokforing from "./pages/LopandeBokforing";
import BokslutArsredovisning from "./pages/BokslutArsredovisning";
import Deklaration from "./pages/Deklaration";
import Lonehantering from "./pages/Lonehantering";
import Radgivning from "./pages/Radgivning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tjanster/lopande-bokforing" element={<LopandeBokforing />} />
          <Route path="/tjanster/bokslut-arsredovisning" element={<BokslutArsredovisning />} />
          <Route path="/tjanster/deklaration" element={<Deklaration />} />
          <Route path="/tjanster/lonehantering" element={<Lonehantering />} />
          <Route path="/tjanster/radgivning" element={<Radgivning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
