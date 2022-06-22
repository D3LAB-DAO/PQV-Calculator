import styled from "styled-components";

const Div = styled.div`
  background-color: #323232;
  color: white;
  width: 100%;
  position: absolute;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
`;

const Footer = () => {
  return (
    <Div className="container-fluid">
      <div className="row mb-3">
        <div className="col">
          <img
            className="sponsor-logo partner_img"
            src="img/d3lablogo.png"
            alt="logo"
          />
          <br />
          <a
            href="https://sharp-saw-d58.notion.site/D3LAB-10c829858e4c42eda1ce140f3e7e77bf"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-house-fill member-icon"></i>
          </a>
          <a
            href="https://github.com/D3LAB-DAO"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github member-icon" />
          </a>
          <a
            href="https://www.youtube.com/c/D3LAB"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube member-icon" />
          </a>
          <a
            href="https://medium.com/d3lab-dao"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-medium member-icon" />
          </a>
          <a
            href="https://twitter.com/D3LAB_DAO"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter member-icon" />
          </a>
          <a href="mailto:d3lab.dao@gmail.com" target="_blank" rel="noreferrer">
            <i className="bi bi-envelope-fill member-icon"></i>
          </a>
        </div>
      </div>
    </Div>
  );
};

export default Footer;
