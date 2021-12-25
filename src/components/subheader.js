import styled from "styled-components";

const SubHeader = () => {
  const Img = styled.img`
    height: 80%;
  `;
  return (
    <div className="container-fluid">
      <div className="row">
        <Img className="g-0" src="img/ocean.jpg" alt="subheader" />
      </div>
    </div>
  );
};

export default SubHeader;
