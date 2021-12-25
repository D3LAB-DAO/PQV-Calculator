import { useState } from "react";
import styled from "styled-components";
import InputCard from "./inputcard";

const ProjList = (props) => {
  const index = props.index;

  return (
    <tr>
      <td>Project #{index}</td>
      <td>
        <InputCard index={index} />
      </td>
      <td>$0</td>
      <td>$0</td>
    </tr>
  );
};

export default ProjList;
