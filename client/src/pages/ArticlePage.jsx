import ArticleLoading from '@/components/utils/ArticleLoading';
import NotFound from '@/components/utils/NotFound';
import { getArticle } from '@/utils/call-api';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

export default function ArticlePage() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['article'],
    queryFn: async () => await getArticle(),
  });

  if (isError) return <NotFound error={error} />;

  const DataLoaded = () => {
    return isLoading ? (
      <ArticleLoading />
    ) : (
      <Grid
        my={4}
        templateColumns={{ sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={4}
      >
        {data.map((data) => (
          <GridItem key={data._id}>
            <LinkBox as="article" p="5" borderWidth="1px" rounded="md">
              <Text fontSize={{ base: 'xs', xs: 'sm' }}>{data.author}</Text>
              <Tag colorScheme="teal" size={'sm'}>
                {data.category} / {data.year}
              </Tag>
              <Heading noOfLines={2} size={{ base: 'xs', xs: 'md' }} my="2">
                <LinkOverlay isExternal href={data.url}>
                  {data.title}
                </LinkOverlay>
              </Heading>
              <Text noOfLines={7} textAlign={'justify'}>
                {data.description}
              </Text>
            </LinkBox>
          </GridItem>
        ))}
      </Grid>
    );
  };

  return (
    <Box py={8} fontSize={{ base: 'xs', xs: 'sm', md: 'md' }}>
      <Heading textAlign={'center'} size={'md'}>
        Artikel Terkait
      </Heading>
      {DataLoaded()}
    </Box>
  );
}
