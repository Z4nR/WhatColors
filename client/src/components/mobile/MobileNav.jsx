import { InfoOutlineIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, HStack, Button, Icon } from "@chakra-ui/react";
import { FiFileText, FiHome } from "react-icons/fi";
import { useLocation, Link as ReactRouterLink } from "react-router-dom";

export default function MobileNav() {
  const urlLocation = useLocation();
  const urlPath = urlLocation.pathname;

  return (
    <Box
      bg={"white"}
      bottom={0}
      left={0}
      right={0}
      as="footer"
      position={"sticky"}
      boxShadow={"0px 0px 2px 0px rgba(0, 0, 0, 0.2)"}
      zIndex={11}
      width={"full"}
    >
      <HStack p={4} gap={"5"} justifyContent={"center"}>
        <Button
          size={"xs"}
          fontSize="sm"
          as={ReactRouterLink}
          to="/"
          variant={"ghost"}
          aria-label="Home button"
          aria-current={urlPath === "/" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          leftIcon={<Icon as={FiHome} />}
        >
          Beranda
        </Button>
        <Button
          size={"xs"}
          fontSize="sm"
          as={ReactRouterLink}
          to="/about"
          variant={"ghost"}
          aria-label="About button"
          aria-current={urlPath === "/about" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          leftIcon={<Icon as={InfoOutlineIcon} />}
        >
          Tentang
        </Button>
        <Button
          size={"xs"}
          fontSize="sm"
          as={ReactRouterLink}
          to="/article"
          variant={"ghost"}
          aria-label="Article button"
          aria-current={urlPath === "/article" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          leftIcon={<Icon as={FiFileText} />}
        >
          Artikel
        </Button>
        <Button
          size={"xs"}
          fontSize="sm"
          as={ReactRouterLink}
          to="/faq"
          variant={"ghost"}
          aria-label="FAQ button"
          aria-current={urlPath === "/faq" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          leftIcon={<Icon as={QuestionOutlineIcon} />}
        >
          FAQ
        </Button>
      </HStack>
    </Box>
  );
}
