/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Header = () => {
  const Div = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #212529;
  `;

  const Title = styled.a`
    font-weight: 700;
  `;

  return (
    <Div className="container-fluid">
      <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">
            PQV-TUTORIAL
          </a>
        </div>
      </nav>
    </Div>
  );
};

export default Header;
