/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import styled from "styled-components";

const Space = styled.div`
  margin-top: 10rem;
`;

const CardDark = styled.div`
  background: #323232;
  color: #f8f8f8;
  border-color: #f8f8f8;
`;

const CardHeader = styled.h4`
  background: #d3a3b1;
  color: #f8f8f8;
`;

const LinkImg = styled.img`
  height: 2.5rem;
`;

const Creators = () => {
  const Creator = (props) => {
    return (
      <CardDark className="card">
        <CardHeader className="card-header fw-bold">{props.role}</CardHeader>
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p>Description</p>
          <div className="row">
            <div className="col">
              <a href={props.mediumUrl}>
                <LinkImg className="" src="img/medium.png" alt="medium" />
              </a>
            </div>
            <div className="col">
              <a href={props.instagramUrl}>
                <LinkImg className="" src="img/instagram.png" alt="instagram" />
              </a>
            </div>
            <div className="col">
              <a href={props.twitterUrl}>
                <LinkImg className="" src="img/twitter.png" alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </CardDark>
    );
  };

  return (
    <div className="container mb-3">
      <Space className="row mb-3">
        <div className="col">
          <h1>CREATORS</h1>
        </div>
      </Space>
      <div className="row">
        <div className="col">
          <Creator
            role="Developer"
            name="Luke Park"
            mediumUrl="#"
            instagramUrl="#"
            twitterUrl="#"
          />
        </div>
        <div className="col">
          <Creator
            role="Researcher"
            name="Bosung Park"
            mediumUrl="#"
            instagramUrl="#"
            twitterUrl="#"
          />
        </div>
        <div className="col">
          <Creator
            role="Developer"
            name="Ingeun Kim"
            mediumUrl="#"
            instagramUrl="#"
            twitterUrl="#"
          />
        </div>
        <div className="col">
          <Creator
            role="Developer"
            name="Junmo Lee"
            mediumUrl="#"
            instagramUrl="#"
            twitterUrl="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Creators;
