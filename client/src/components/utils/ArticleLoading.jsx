import { Box, Grid, GridItem, Heading, Skeleton, Text } from '@chakra-ui/react';

export default function ArticleLoading() {
  return (
    <Grid
      my={4}
      templateColumns={{ sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={4}
    >
      {[...Array(6)].map((_, index) => (
        <GridItem key={index}>
          <Box as="article" p="5" borderWidth="1px" rounded="md">
            <Skeleton>
              <Text fontSize={{ base: 'xs', xs: 'sm' }}>
                odio euismod lacinia at quis risus sed
              </Text>
              <Text fontSize={'sm'}>lorem</Text>
            </Skeleton>
            <Skeleton>
              <Heading noOfLines={2} size={{ base: 'xs', xs: 'md' }} my="2">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ultrices neque ornare aenean euismod elementum nisi quis
                  eleifend.
                </Text>
              </Heading>
            </Skeleton>
            <Skeleton>
              <Text noOfLines={7} textAlign={'justify'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                aliquet risus feugiat in. Tellus in hac habitasse platea
                dictumst vestibulum rhoncus est pellentesque. Mauris rhoncus
                aenean vel elit scelerisque mauris pellentesque pulvinar.
                Suspendisse sed nisi lacus sed. Nullam ac tortor vitae purus
                faucibus ornare suspendisse. Mus mauris vitae ultricies leo
                integer malesuada nunc vel.
              </Text>
            </Skeleton>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}
