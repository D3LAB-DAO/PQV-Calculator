import styled from "styled-components";

const SubHeader = () => {
  const Img = styled.img`
    height: 20%;
    background-color: #323232;
  `;

  const Div = styled.div`
    height: 10%;
    background-color: #323232;
  `;

  return (
    <div className="container-fluid">
      <Div className="row">
        <div className="col">
          <Img className="g-0" src="img/logo_b.png" alt="logo_b" />
        </div>
      </Div>
    </div>
  );
};

export default SubHeader;
