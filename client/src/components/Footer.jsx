import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <Box as="footer" display={"block"} width={"full"}>
      <Box width={"full"} bg={"teal"} color={"white"}>
        <Flex direction={"column"} gap={6} pt={6} pb={8} alignItems={"center"}>
          <Text>Created by Zulham 👋</Text>
          <HStack spacing={8} justifyContent={"center"}>
            <Link href="mailto: ari.comunity1@gmail.com" isExternal>
              <FiMail />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zulham-ari-nur-ridhwan"
              isExternal
            >
              <FiLinkedin />
            </Link>
            <Link href="https://github.com/" isExternal>
              <FiGithub />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
