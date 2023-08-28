import {
  HStack,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  InfoOutlineIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { FiFileText, FiHome } from "react-icons/fi";
import { useLocation, Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const urlLocation = useLocation();
  const urlPath = urlLocation.pathname;

  return (
    <>
      <Menu isLazy>
        <MenuButton
          colorScheme="teal"
          size={"md"}
          icon={<HamburgerIcon />}
          display={{ sm: "none" }}
          onClick={isOpen ? onClose : onOpen}
          as={IconButton}
          aria-label="Options"
          variant={"solid"}
        />
        <MenuList>
          <MenuItem
            as={ReactRouterLink}
            to="/"
            aria-current={urlPath === "/" ? "page" : undefined}
            sx={{
              "&[aria-current=page]": {
                color: "teal",
              },
            }}
            icon={<FiHome />}
          >
            Beranda
          </MenuItem>
          <MenuItem
            as={ReactRouterLink}
            to="/about"
            aria-current={urlPath === "/about" ? "page" : undefined}
            sx={{
              "&[aria-current=page]": {
                color: "teal",
              },
            }}
            icon={<InfoOutlineIcon />}
          >
            Tentang
          </MenuItem>
          <MenuItem
            as={ReactRouterLink}
            to="/article"
            aria-current={urlPath === "/article" ? "page" : undefined}
            sx={{
              "&[aria-current=page]": {
                color: "teal",
              },
            }}
            icon={<FiFileText />}
          >
            Artikel
          </MenuItem>
          <MenuItem
            as={ReactRouterLink}
            to="/faq"
            aria-current={urlPath === "/faq" ? "page" : undefined}
            sx={{
              "&[aria-current=page]": {
                color: "teal",
              },
            }}
            icon={<QuestionOutlineIcon />}
          >
            FAQ
          </MenuItem>
        </MenuList>
      </Menu>
      <HStack
        direction={"row"}
        display={{ base: "none", sm: "flex" }}
        spacing={{ sm: 8, lg: 16 }}
      >
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          aria-current={urlPath === "/" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          fontWeight="semibold"
          transition="all 0.2s"
          _hover={{ color: "gray.500" }}
        >
          Beranda
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/about"
          aria-current={urlPath === "/about" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          fontWeight="semibold"
          transition="all 0.2s"
          _hover={{ color: "gray.500" }}
        >
          Tentang
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/article"
          aria-current={urlPath === "/article" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          fontWeight="semibold"
          transition="all 0.2s"
          _hover={{ color: "gray.500" }}
        >
          Artikel
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to="/faq"
          aria-current={urlPath === "/faq" ? "page" : undefined}
          sx={{
            "&[aria-current=page]": {
              color: "teal",
            },
          }}
          fontWeight="semibold"
          transition="all 0.2s"
          _hover={{ color: "gray.500" }}
        >
          FAQ
        </ChakraLink>
      </HStack>
    </>
  );
}
