import { InfoOutlineIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import { Box, HStack, Button, Icon, VStack, Text } from '@chakra-ui/react';
import { FiFileText, FiHome } from 'react-icons/fi';
import { useLocation, Link as ReactRouterLink } from 'react-router-dom';

export default function MobileNav() {
  const urlLocation = useLocation();
  const urlPath = urlLocation.pathname;

  return (
    <Box
      bg={'white'}
      bottom={0}
      left={0}
      right={0}
      as="footer"
      position={'sticky'}
      boxShadow={'0px 0px 2px 0px rgba(0, 0, 0, 0.2)'}
      zIndex={11}
      width={'full'}
    >
      <HStack px={4} py={2} gap={'5'} justifyContent={'center'}>
        <Button
          as={ReactRouterLink}
          to="/"
          variant={'ghost'}
          aria-label="Home button"
          aria-current={urlPath === '/' ? 'page' : undefined}
          sx={{
            '&[aria-current=page]': {
              color: 'teal',
            },
          }}
        >
          <VStack gap={1}>
            <Icon fontSize={'lg'} as={FiHome} />
            <Text fontSize={'xs'}>Beranda</Text>
          </VStack>
        </Button>
        <Button
          as={ReactRouterLink}
          to="/about"
          variant={'ghost'}
          aria-label="About button"
          aria-current={urlPath === '/about' ? 'page' : undefined}
          sx={{
            '&[aria-current=page]': {
              color: 'teal',
            },
          }}
        >
          <VStack gap={1}>
            <Icon fontSize={'lg'} as={InfoOutlineIcon} />
            <Text fontSize={'xs'}>Tentang</Text>
          </VStack>
        </Button>
        <Button
          as={ReactRouterLink}
          to="/article"
          variant={'ghost'}
          aria-label="Article button"
          aria-current={urlPath === '/article' ? 'page' : undefined}
          sx={{
            '&[aria-current=page]': {
              color: 'teal',
            },
          }}
        >
          <VStack gap={1}>
            <Icon fontSize={'lg'} as={FiFileText} />
            <Text fontSize={'xs'}>Artikel</Text>
          </VStack>
        </Button>
        <Button
          as={ReactRouterLink}
          to="/faq"
          variant={'ghost'}
          aria-label="FAQ button"
          aria-current={urlPath === '/faq' ? 'page' : undefined}
          sx={{
            '&[aria-current=page]': {
              color: 'teal',
            },
          }}
        >
          <VStack gap={1}>
            <Icon fontSize={'lg'} as={QuestionOutlineIcon} />
            <Text fontSize={'xs'}>FAQ</Text>
          </VStack>
        </Button>
      </HStack>
    </Box>
  );
}
