import {
  Box,
  Container,
  SkipNavContent,
  useMediaQuery,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import FAQPage from "@/pages/FAQPage";
import Footer from "@/components/Footer";
import MobileNav from "@/components/mobile/MobileNav";
import AboutPage from "@/pages/AboutPage";
import ArticlePage from "@/pages/ArticlePage";
import TestPage from "@/pages/TestPage";
import WebHeader from "@/components/web/WebHeader";
import AppHeader from "@/components/mobile/AppHeader";
import AdminPage from "@/pages/AdminPage";
import HomePage from "@/pages/HomePage";
import ResultPage from "./pages/ResultPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VerifyCode from "./components/utils/VerifyCode";

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
        minHeight={{ base: "100vh", xs: "70vh", md: "75vh", "2xl": "80vh" }}
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
              <Route path="/verify-code" element={<VerifyCode />} />
            </Routes>
          </QueryClientProvider>
        </Container>
      </Box>
      {isMobile ? <MobileNav /> : <Footer />}
    </Box>
  );
}
