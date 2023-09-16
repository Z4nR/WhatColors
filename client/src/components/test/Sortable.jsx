import { Box } from "@chakra-ui/react";
import { ReactSortable } from "react-sortablejs";

export default function Sortable({ handle, data, testDone }) {
  if (testDone) {
    return (
      <ReactSortable
        className="row-box"
        group={{ name: "valueByRow", put: false }}
        disabled={true}
        animation={200}
        ghostClass="ghostbox"
        list={data.value}
        setList={(newState) => handle(data.row, newState)}
      >
        {data.value.map((item) => (
          <Box
            key={item.color}
            backgroundColor={item.color}
            margin={"4px 1px"}
            border={"1px solid #252525"}
            cursor={"pointer"}
            width={{ base: 8, xs: 9, lg: 10 }}
            height={{ base: 8, xs: 9, lg: 10 }}
          />
        ))}
      </ReactSortable>
    );
  }

  return (
    <ReactSortable
      className="row-box"
      group={{ name: "valueByRow", put: false }}
      animation={200}
      ghostClass="ghostbox"
      list={data.value}
      setList={(newState) => handle(data.row, newState)}
    >
      {data.value.map((item) => (
        <Box
          key={item.color}
          backgroundColor={item.color}
          margin={"4px 1px"}
          border={"1px solid #252525"}
          cursor={"pointer"}
          width={{ base: 8, xs: 9, lg: 10 }}
          height={{ base: 8, xs: 9, lg: 10 }}
        />
      ))}
    </ReactSortable>
  );
}
