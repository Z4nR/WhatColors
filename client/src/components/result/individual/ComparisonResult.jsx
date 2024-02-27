import { useChartComparison } from '@/utils/customHooks';
import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from '@chakra-ui/react';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';

export default function ComparisonResult({ data }) {
  const [getComparison] = useChartComparison();
  const [isDesktop] = useMediaQuery('(min-width: 550px)');

  useEffect(() => {
    let trueCount = 0;
    let falseCount = 0;

    for (let i = 0; i < getComparison?.length; i++) {
      if (getComparison[i] === 'Benar') {
        trueCount++;
      } else {
        falseCount++;
      }
    }

    const count = [trueCount, falseCount];

    const label = ['Benar', 'Salah'];
    const pieData = {
      labels: label,
      datasets: [
        {
          label: 'Jumlah Nilai',
          data: count,
          backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
          hoverOffset: 4,
        },
      ],
    };
    const config = {
      type: 'pie',
      data: pieData,
    };

    if (getComparison && isDesktop) {
      new Chart('pie-chart', config);
    }
  }, [getComparison, isDesktop]);

  return (
    <Box textAlign={'center'} py={{ lg: 4 }}>
      <Heading size={{ base: 'sm', sm: 'md' }}>Hasil Komparasi Warna:</Heading>
      <Text mt={2} fontSize={{ base: 'xs', xs: 'sm', md: 'md' }}>
        *Hasil komparasi diambil dari hasil tes yang kamu lakukan kemudian
        dibandingkan dengan nilai asli.
      </Text>
      {isDesktop ? (
        <Flex
          mt={6}
          mb={2}
          mx={'auto'}
          position={'relative'}
          width={{ sm: 550, lg: 750 }}
          justifyContent={'center'}
        >
          <canvas id="pie-chart" />
        </Flex>
      ) : (
        <TableContainer my={4}>
          <Table size={'sm'}>
            <Thead>
              <Tr>
                <Th textAlign={'center'} maxWidth={75} color="teal">
                  Kode Warna
                </Th>
                <Th textAlign={'center'} color="teal">
                  Nilai
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.comparisonResult?.map((value) => (
                <Tr key={value._id}>
                  <Td textAlign={'center'} maxWidth={75}>
                    {value._id}
                  </Td>
                  <Td textAlign={'center'}>{value.comparison}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
