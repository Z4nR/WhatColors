import {
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export default function AdminLoading() {
  return (
    <TableContainer
      mt={6}
      mb={2}
      minHeight={{ base: '68vh', xs: '75vh', md: '58vh' }}
    >
      <Table size={'sm'}>
        <Thead>
          <Tr>
            <Th textAlign={{ md: 'center' }}>#</Th>
            <Th textAlign={{ md: 'center' }}>Nama</Th>
            <Th textAlign={{ md: 'center' }}>Skor Tes</Th>
            <Th textAlign={{ md: 'center' }}>Waktu</Th>
            <Th textAlign={{ md: 'center' }}>Status</Th>
            <Th textAlign={{ md: 'center' }}>Perangkat</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(10)].map((_, index) => (
            <Tr key={index}>
              <Td textAlign={{ md: 'center' }}>
                <Skeleton>
                  <p>Lorem</p>
                </Skeleton>
              </Td>
              <Td textAlign={{ md: 'center' }}>
                <Skeleton>
                  <p>Lorem Ipsum</p>
                </Skeleton>
              </Td>
              <Td textAlign={'center'}>
                <Skeleton>
                  <p>Lorem Ipsum</p>
                </Skeleton>
              </Td>
              <Td textAlign={'center'}>
                <Skeleton>
                  <p>Lorem Ipsum</p>
                </Skeleton>
              </Td>
              <Td textAlign={'center'}>
                <Skeleton>
                  <p>Lorem Ipsum</p>
                </Skeleton>
              </Td>
              <Td textAlign={'center'}>
                <Skeleton>
                  <p>Lorem Ipsum</p>
                </Skeleton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
