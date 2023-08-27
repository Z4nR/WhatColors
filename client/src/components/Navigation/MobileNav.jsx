import { InfoOutlineIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Link } from "@chakra-ui/react";
import { FiFileText, FiHome } from "react-icons/fi";

export default function MobileNav() {
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
        <Link href="/">
          <IconButton
            variant={"outline"}
            aria-label="Home button"
            icon={<FiHome />}
          />
        </Link>
        <Link href="/">
          <IconButton
            variant={"outline"}
            aria-label="Home button"
            icon={<InfoOutlineIcon />}
          />
        </Link>
        <Link href="/">
          <IconButton
            variant={"outline"}
            aria-label="Home button"
            icon={<FiFileText />}
          />
        </Link>
        <Link href="/faq">
          <IconButton
            variant={"outline"}
            aria-label="Home button"
            icon={<QuestionOutlineIcon />}
          />
        </Link>
      </HStack>
    </Box>
  );
}
