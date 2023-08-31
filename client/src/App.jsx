import {
  Box,
  Container,
  SkipNavContent,
  useMediaQuery,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import FAQPage from "./pages/FAQPage";
import Footer from "./components/Footer";
import MobileNav from "./components/navigation/MobileNav";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import WebHeader from "./components/header/WebHeader";
import MobileHeader from "./components/header/MobileHeader";
import Home from "./pages/Home";

export default function App() {
  const [isMobile] = useMediaQuery("(max-width: 401px)");

  return (
    <Box>
      <SkipNavContent />
      {isMobile ? <MobileHeader /> : <WebHeader />}
      <Box
        as="main"
        width={"full"}
        minHeight={{ base: "100vh", xs: "75vh", md: "77vh", "2xl": "80vh" }}
      >
        <Container maxW={"container.xl"} px={5}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </Container>
      </Box>
      {isMobile ? <MobileNav /> : <Footer />}
    </Box>
  );
}
