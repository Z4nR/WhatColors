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

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isLazy>
        <MenuButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ sm: "none" }}
          onClick={isOpen ? onClose : onOpen}
          as={IconButton}
          aria-label="Options"
          variant="outline"
        />
        <MenuList>
          <MenuItem as={"a"} href="/" icon={<FiHome />}>
            Beranda
          </MenuItem>
          <MenuItem as={"a"} href="/" icon={<InfoOutlineIcon />}>
            Tentang
          </MenuItem>
          <MenuItem as={"a"} href="/" icon={<FiFileText />}>
            Artikel
          </MenuItem>
          <MenuItem as={"a"} href="/faq" icon={<QuestionOutlineIcon />}>
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
          fontWeight="semibold"
          transition="all 0.2s"
          _hover={{ color: "gray.500" }}
        >
          Beranda
        </Link>
        <Link
          href="/"
          fontWeight="semibold"
          transition="all 0.2s"
          _hover={{ color: "gray.500" }}
        >
          Tentang
        </Link>
        <Link
          href="/"
          fontWeight="semibold"
          transition="all 0.2s"
          _hover={{ color: "gray.500" }}
        >
          Artikel
        </Link>
        <Link
          href="/faq"
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
