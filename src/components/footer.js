import styled from "styled-components";

const Div = styled.div`
  background-color: #212529;
  color: white;
  width: 100%;
  position: absolute;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
`;

const Img = styled.img`
  width: 20rem;
`;

const Footer = () => {
  return (
    <Div className="container-fluid">
      <div className="row mb-3">
        <div className="col">
          <Img src="img/text_logo_2.png" alt="logo" />
        </div>
        <div className="col align-self-center">
          <p className="text-start">
            Decentralized Autonomous Organization that studies decentralized
            things in a decentralized manner.
          </p>
        </div>
      </div>
      <div className="row">
        <h6>Copyright 2022. D3LAB-DAO. All Rights Reserved.</h6>
      </div>
    </Div>
  );
};

export default Footer;
