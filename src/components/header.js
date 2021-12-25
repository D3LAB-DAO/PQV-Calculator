/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Header = () => {
  const Div = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #212529;
  `;
  return (
    <Div className="container-fluid">
      <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            DAPPO: PQV Tutorial
          </a>
        </div>
      </nav>
    </Div>
  );
};

export default Header;
