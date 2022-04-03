import styled from "styled-components";

const Space = styled.div`
  margin-top: 10rem;
`;

const Chainlink = styled.img`
  height: 10rem;
`;

const Curg = styled.img`
  height: 10rem;
`;

const Sponsors = () => {
  return (
    <div className="container mb-3">
      <Space className="row mb-3">
        <div className="col">
          <h1 className="fw-bold">SPONSORS</h1>
        </div>
      </Space>
      <div className="row">
        <div className="col">
          <Chainlink className="" src="img/chainlink.png" alt="chainlink" />
        </div>
        <div className="col">
          <Curg className="" src="img/curg.png" alt="curg" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
