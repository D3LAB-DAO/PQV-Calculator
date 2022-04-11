/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Space = styled.div`
  margin-bottom: 10rem;
`;

const SubHeader = () => {
  return (
    <div id="home" className="container-fluid sect">
      <div className="row">
        <div className="col">
          <img className="img-fluid" src="img/logo.png" alt="logo" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-1"></div>
        <div className="col-10">
          <h1 className="sect__title">Governor-C Simulator</h1>
          <h5 className="row__sub">Sybil resistant voting system without harming the result of QV.</h5>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col">
          <a className="btn btn-dark learn-more" href="https://d3lab-dao.gitbook.io/pqv/" target="_blank">
          <i class="bi bi-journals"></i> GitBook
          </a>
        </div>
      </div>
      <Space className="row" />
    </div>
  );
};

export default SubHeader;
