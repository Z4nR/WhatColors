import {
  Box,
  Container,
  Flex,
  Img,
  SkipNavContent,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import desktopLogo from "./assets/desktop-logo.svg";
import mobileLogo from "./assets/mobile-logo.svg";
import Navbar from "./components/Navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FAQPage from "./pages/FAQPage";
import Footer from "./components/Footer";
import MobileNav from "./components/Navigation/MobileNav";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";

export default function App() {
  const [isMobile] = useMediaQuery("(max-width: 400px)");

  if (isMobile) {
    return (
      <Box>
        <SkipNavContent />
        <Box
          bg={"white"}
          as="header"
          boxShadow={"sm"}
          zIndex={11}
          top={0}
          left={0}
          right={0}
          position={"sticky"}
          width={"full"}
        >
          <Container maxW={"container.xl"} p={3}>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Img
                src={mobileLogo}
                alt="WhatColors Website Logo"
                width={"42px"}
              />
            </Flex>
          </Container>
        </Box>
        <Box as="main" width={"full"} minHeight={"500px"}>
          <Container maxW={"container.xl"} pr={5} pl={5}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/article" element={<ArticlePage />} />
            </Routes>
          </Container>
        </Box>
        <MobileNav />
      </Box>
    );
  }

  return (
    <Box>
      <SkipNavContent />
      <Box
        bg={"white"}
        as="header"
        boxShadow={"sm"}
        zIndex={11}
        top={0}
        left={0}
        right={0}
        position={"sticky"}
        width={"full"}
      >
        <Container maxW={"container.xl"} p={{ xs: 3, sm: 5 }}>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Img
              src={desktopLogo}
              alt="WhatColors Website Logo"
              width={{ xs: "150px", md: "auto" }}
            />
            <Spacer />
            <Navbar />
          </Flex>
        </Container>
      </Box>
      <Box as="main" width={"full"}>
        <Container maxW={"container.xl"} pr={5} pl={5}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </Container>
      </Box>
      <Box as="footer" display={"block"} width={"full"}>
        <Footer />
      </Box>
    </Box>
  );
}
