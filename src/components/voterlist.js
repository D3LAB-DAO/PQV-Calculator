import InputCard from "./inputcard";
import { useEffect } from "react";

const VoterList = (props) => {
  const index = props.index;
  const projList = props.projList;

  // console.log("index: ", index);
  // console.log("projList: ", projList);

  useEffect(() => {});

  return (
    <tr>
      <td>
        VOTER
        <br />
        {index + 1}
      </td>
      {projList.map((e) => (
        <td>
          <InputCard index={index} projIndex={e.index} />
        </td>
      ))}
    </tr>
  );
};

export default VoterList;
