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
          <h1 className="sect__title">PQV Calculator</h1>
          <h5 className="row__sub">
            Sybil resistant voting system without harming the result of QV.
          </h5>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col">
          <a
            className="btn btn-dark learn-more me-1"
            href="https://d3lab-dao.gitbook.io/pqv/"
            target="_blank"
          >
            <i className="bi bi-journals"></i> GitBook
          </a>

          <a
            className="btn btn-dark lite-paper ms-1"
            href="https://github.com/D3LAB-DAO/PQV-docs/blob/main/D3LAB_PQV.pdf"
            target="_blank"
          >
            <i className="bi bi-journal-text"></i> Litepaper
          </a>
        </div>
      </div>
      <Space className="row" />
    </div>
  );
};

export default SubHeader;
