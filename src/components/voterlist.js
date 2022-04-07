import InputCard from "./inputcard";

const VoterList = (props) => {
  const index = props.index;

  return (
    <tr>
      <td>VOTER#{index + 1}</td>
      <td>
        <InputCard index={index} projIndex={0} />
      </td>
      <td>
        <InputCard index={index} projIndex={1} />
      </td>
      <td>
        <InputCard index={index} projIndex={2} />
      </td>
      <td>
        <InputCard index={index} projIndex={3} />
      </td>
    </tr>
  );
};

export default VoterList;
