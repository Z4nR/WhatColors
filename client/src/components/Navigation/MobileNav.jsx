import { InfoOutlineIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";
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
      <HStack p={2} gap={"5"} justifyContent={"center"}>
        <IconButton
          size={"lg"}
          as={ReactRouterLink}
          to="/"
          variant={"outline"}
          aria-label="Home button"
          aria-current={urlPath === "/" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "white",
              bg: "teal",
            },
          }}
          icon={<FiHome />}
        />
        <IconButton
          size={"lg"}
          as={ReactRouterLink}
          to="/about"
          variant={"outline"}
          aria-label="About button"
          aria-current={urlPath === "/about" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "white",
              bg: "teal",
            },
          }}
          icon={<InfoOutlineIcon />}
        />
        <IconButton
          size={"lg"}
          as={ReactRouterLink}
          to="/article"
          variant={"outline"}
          aria-label="Article button"
          aria-current={urlPath === "/article" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "white",
              bg: "teal",
            },
          }}
          icon={<FiFileText />}
        />
        <IconButton
          size={"lg"}
          as={ReactRouterLink}
          to="/faq"
          variant={"outline"}
          aria-label="FAQ button"
          aria-current={urlPath === "/faq" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "white",
              bg: "teal",
            },
          }}
          icon={<QuestionOutlineIcon />}
        />
      </HStack>
    </Box>
  );
}
