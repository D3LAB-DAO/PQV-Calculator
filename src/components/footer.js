import styled from "styled-components";

const Footer = () => {
  const Div = styled.div`
    background-color: #212529;
    color: white;
    width: 100%;
    position: absolute;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  `;

  return (
    <Div className="container-fluid">
      <div className="row mb-3">
        <div className="col">
          <h2>D.LAB</h2>
        </div>
        <div className="col">
          <p className="text-start">
            Decentralized Autonomous Organization that studies decentralized
            things in a decentralized manner
          </p>
        </div>
      </div>
      <div className="row">
        <h6>Copyright © 2021 D.LAB. All rights reserved.</h6>
      </div>
    </Div>
  );
};

export default Footer;
