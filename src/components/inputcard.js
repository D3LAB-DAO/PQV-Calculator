import styled from "styled-components";
import { projListContext } from "./pqv";
import { useContext } from "react";

const InputCard = (props) => {
  const projListProps = useContext(projListContext);
  const index = props.index;

  const handleInputChange = (e, index) => {
    const voting = e.target.value;
    const tmp = [...projListProps.projList];
    tmp[index - 1].voting = voting;
    projListProps.setProjList(tmp);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="10, 20, 30 ..."
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputCard;
