import { useDiagram } from "@/utils/customHooks";
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
} from "@chakra-ui/react";
import Chart from "chart.js/auto";
import { useEffect, useMemo } from "react";

export default function DiscriminantResult({ data }) {
  const [getDiagram] = useDiagram();
  const [isDesktop] = useMediaQuery("(min-width: 550px)");

  const maxResult = useMemo(() => {
    if (getDiagram !== null) {
      Math.max(...getDiagram.result);
    }
  }, [getDiagram]);

  useEffect(() => {
    const label = getDiagram?.number;
    const data = getDiagram?.result;

    const chartData = {
      labels: label,
      datasets: [
        {
          label: "Nilai Diskriminasi",
          data: data,
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
      ],
    };

    const config = {
      type: "radar",
      data: chartData,
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        scales: {
          r: {
            pointLabels: {
              color: "black",
            },
            suggestedMin: 0,
            suggestedMax: maxResult,
            ticks: {
              color: "blue",
              stepSize: 2,
            },
          },
        },
        spanGaps: true,
        responsive: true,
      },
    };

    if (getDiagram && isDesktop) {
      new Chart("radar-chart", config);
    }
  }, [getDiagram, maxResult, isDesktop]);

  return (
    <Box textAlign={"center"} py={{ lg: 4 }}>
      <Heading size={{ base: "sm", sm: "md" }}>
        Hasil Diskriminasi Warna:
      </Heading>
      <Text mt={2} fontSize={{ base: "xs", xs: "sm", md: "md" }}>
        *Hasil diskriminasi diambil dari seberapa jauh kesalahan peletakan warna
        hasil tes yang kamu lakukan dengan posisi aslinya.
      </Text>
      {isDesktop ? (
        <Flex
          mt={6}
          mb={2}
          mx={"auto"}
          position={"relative"}
          width={{ sm: 550, lg: 750 }}
          justifyContent={"center"}
        >
          <canvas id="radar-chart" />
        </Flex>
      ) : (
        <TableContainer my={4}>
          <Table size={"sm"}>
            <Thead>
              <Tr>
                <Th textAlign={"center"} maxWidth={75} color="teal">
                  Kode Warna
                </Th>
                <Th textAlign={"center"} color="teal">
                  Nilai
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.discriminantResult?.map((value) => (
                <Tr key={value._id}>
                  <Td textAlign={"center"} maxWidth={75}>
                    {value._id}
                  </Td>
                  <Td textAlign={"center"}>{value.discriminant}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
