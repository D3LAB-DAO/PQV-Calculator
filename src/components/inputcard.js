import styled from "styled-components";
import { voterListContext } from "./pqv";
import { useContext } from "react";

const InputCard = (props) => {
  const voterListProps = useContext(voterListContext);
  const index = props.index;
  const projIndex = props.projIndex;

  const handleInputChange = (e, index, projIndex) => {
    const voting = e.target.value;
    const tmp = [...voterListProps.voterList];
    tmp[index].projList[projIndex] = voting;
    voterListProps.setVoterList(tmp);
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="10, 20, 30 ..."
              onChange={(e) => handleInputChange(e, index, projIndex)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
