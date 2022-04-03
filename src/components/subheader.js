/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Img = styled.img`
  height: 30rem;
`;

const Space = styled.div`
  margin-bottom: 12.5rem;
`;

const SubHeader = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Img className="" src="img/logo_c.png" alt="logo_c" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h1 className="fw-bold">Governor-C Simulator</h1>
          <h5>Description of Governor-C Simulator</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a class="btn btn-pink" href="#">
            Learn More
          </a>
        </div>
      </div>
      <Space className="row" />
    </div>
  );
};

export default SubHeader;
