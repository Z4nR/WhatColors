import ClientSearch from '@/components/search/ClientSearch';
import GroupSearch from '@/components/search/GroupSearch';
import IndividualSearch from '@/components/search/IndividualSearch';
import { getTestSearch } from '@/utils/call-api';
import { useToastMsg } from '@/utils/customHooks';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export default function SearchPage() {
  const toast = useToastMsg();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutateAsync, isLoading, data } = useMutation({
    mutationFn: getTestSearch,
    onSuccess: () => {
      toast('Pencarian Berhasil', 'Data berhasil ditampilkan', 'success');
    },
    onError: (error) => {
      toast('Terjadi Kesalahan', `${error.response.data.message}`, 'error');
    },
  });

  const onSearch = (data) => {
    mutateAsync(data.name);
  };

  return (
    <Box mt={{ base: 4, lg: 8 }}>
      <form onSubmit={handleSubmit(onSearch)}>
        <HStack gap={15} justifyContent={'center'} alignItems={'center'}>
          <FormControl maxWidth={'400px'}>
            <Input
              id="name"
              autoComplete="off"
              focusBorderColor="teal.400"
              placeholder="Masukan Data Yang Ingin Dicari"
              {...register('name')}
            />
          </FormControl>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
          <Button type="submit" isLoading={isLoading}>
            Cari
          </Button>
        </HStack>
      </form>
      <Tabs
        mt={{ base: 4, lg: 8 }}
        isFitted
        variant="line"
        colorScheme="orange"
      >
        <TabList>
          <Tab fontSize={{ base: 'sm', lg: 'md' }}>Individu</Tab>
          <Tab fontSize={{ base: 'sm', lg: 'md' }}>Peserta</Tab>
          <Tab fontSize={{ base: 'sm', lg: 'md' }}>Grup Tes</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <IndividualSearch data={data?.individual} />
          </TabPanel>
          <TabPanel>
            <ClientSearch data={data?.client} />
          </TabPanel>
          <TabPanel>
            <GroupSearch data={data?.room} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
