import {
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import {
  CloseIcon,
  HamburgerIcon,
  InfoOutlineIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { FiFileText, FiHome } from "react-icons/fi";
import { useLocation } from "react-router-dom";

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
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ sm: "none" }}
          onClick={isOpen ? onClose : onOpen}
          as={IconButton}
          aria-label="Options"
          variant="solid"
        />
        <MenuList>
          <MenuItem
            as={"a"}
            href="/"
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
            as={"a"}
            href="/about"
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
            as={"a"}
            href="/article"
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
            as={"a"}
            href="/faq"
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
        <Link
          href="/"
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
        </Link>
        <Link
          href="/about"
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
        </Link>
        <Link
          href="/article"
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
        </Link>
        <Link
          href="/faq"
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
        </Link>
      </HStack>
    </>
  );
}
