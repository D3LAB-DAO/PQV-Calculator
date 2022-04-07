/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Img = styled.img`
  height: 25rem;
`;

const Space = styled.div`
  margin-bottom: 10rem;
`;

const SubHeader = () => {
  return (
    <div id="home" className="container-fluid sect">
      <div className="row">
        <div className="col">
          <Img className="" src="img/logo.png" alt="logo" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h1 className="sect__title">Governor-C Simulator</h1>
          <h5 className="row__sub">Description of Governor-C Simulator</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a className="btn btn-dark" href="#">
            Learn More
          </a>
        </div>
      </div>
      <Space className="row" />
    </div>
  );
};

export default SubHeader;
