import {
  Box,
  Container,
  SkipNavContent,
  useMediaQuery,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WebHeader from "@/components/web/WebHeader";
import Footer from "@/components/Footer";
import MobileNav from "@/components/mobile/MobileNav";
import AppHeader from "@/components/mobile/AppHeader";
import VerifyAdmin from "@/components/utils/VerifyAdmin";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";
import AboutPage from "@/pages/AboutPage";
import ArticlePage from "@/pages/ArticlePage";
import AdminPage from "@/pages/AdminPage";
import FAQPage from "@/pages/FAQPage";
import ResultPage from "@/pages/ResultPage";
import SearchPage from "@/pages/SearchPage";

const queryClient = new QueryClient();

export default function App() {
  const [isMobile] = useMediaQuery("(max-width: 401px)");

  return (
    <Box>
      <SkipNavContent />
      {isMobile ? <AppHeader /> : <WebHeader />}
      <Box
        as="main"
        width={"full"}
        minHeight={{ base: "80vh", md: "75vh", "2xl": "80vh" }}
      >
        <Container maxW={"container.xl"} px={5}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/article" element={<ArticlePage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/verify-admin" element={<VerifyAdmin />} />
            </Routes>
          </QueryClientProvider>
        </Container>
      </Box>
      {isMobile ? <MobileNav /> : <Footer />}
    </Box>
  );
}
